export type AppConfig = {
  ai_model_path: string | null;
  whisper_model_path: string | null;

  ai_api_model: string | null;
  whisper_api_model: string | null;

  api_key_masked: string | null;
  ai_engine_type: "local" | "api";
  whisper_engine_type: "local" | "api";

  icon_path: string | null;
};
