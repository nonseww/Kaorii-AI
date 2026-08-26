use crate::config::{AppConfig, EngineType, load_config};
use crate::security::get_api_key_internal;
use openrouter_rs::{
    OpenRouterClient,
    api::chat::{ChatCompletionRequest, Message as ORMessage},
    types::Role
};
use tauri::AppHandle;

pub const SYSTEM_PROMPT: &str = r#"
Ты — Каори, персональный ИИ-ассистент пользователя.

Твоя задача — помогать пользователю решать его задачи, отвечать на вопросы, объяснять сложные вещи понятным языком и поддерживать диалог.

Всегда общайся с пользователем на русском языке, если пользователь явно не попросил использовать другой язык.

Отвечай понятно, естественно и по существу. Учитывай контекст предыдущих сообщений и не повторяй уже известную информацию без необходимости.

Если пользователь просит объяснить что-либо, старайся давать понятное и структурированное объяснение. Если для ответа недостаточно информации, задай уточняющий вопрос.

Не утверждай, что знаешь или сделал то, чего на самом деле не знаешь или не делал.

Ты являешься именно ассистентом Каори и создана для помощи пользователю.
"#;

#[derive(serde::Deserialize)]
pub struct Message {
    pub role: String,
    pub content: String
}

#[tauri::command]
pub async fn ask_ai(
  app_handle: AppHandle,
  messages: Vec<Message>
) -> Result<String, String> {
  let config: AppConfig = load_config(&app_handle)?;
  let ai_engine_type: EngineType = config.ai_engine_type;
  let mut messages = messages;
  messages.insert(0, Message { role: "system".to_string(), content: SYSTEM_PROMPT.to_string() });
  
  match ai_engine_type {
    EngineType::Local => {
      Err("No local model now".to_string())
    }
    EngineType::Api => {
      ask_openrouter(config, messages).await
    }
  }
}

pub async fn ask_openrouter(
    config: AppConfig,
    messages: Vec<Message>
) -> Result<String, String> {
    let model_name = config.ai_api_model.ok_or("No API model selected")?;
    let api_key = get_api_key_internal().map_err(|e| e.to_string())?;

    let client = OpenRouterClient::builder()
      .api_key(&api_key)
      .http_referer("https://github.com/nonseww/Kaorii-AI")
      .x_title("Kaorii AI")
      .build()
      .map_err(|e| e.to_string())?;

      let api_messages: Result<Vec<ORMessage>, String> = messages.into_iter().map(|m| {
      let role = match m.role.as_str() {
        "system" => Role::System,
        "assistant" => Role::Assistant,
        "user" => Role::User,
        _ => return Err("Invalid role".to_string())
      };
      Ok(ORMessage::new(role, m.content))
    }).collect();

    let api_messages = api_messages?;

    let request = ChatCompletionRequest::builder()
      .model(&model_name)
      .messages(api_messages)
      .temperature(0.5)
      .build()
      .map_err(|e| e.to_string())?;

    let response = client.chat().create(&request).await
      .map_err(|e| e.to_string())?;

    let ai_answer = response.choices[0]
      .content()
      .clone()
      .unwrap_or_else(|| "No response").to_string();
    
    Ok(ai_answer)
}
