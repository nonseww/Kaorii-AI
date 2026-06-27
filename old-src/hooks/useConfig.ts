import { useAppStore } from "../store/useAppStore";
import { open } from "@tauri-apps/plugin-dialog";

export const useConfig = () => {
  const store = useAppStore();

  const handleSelectAIModel = async () => {
    const selectedModel = await open({
      multiple: false,
      filters: [{ name: "AI model", extensions: ["gguf"] }],
    });

    if (selectedModel && typeof selectedModel === "string") {
      try {
        store.setError("");
        store.setIsServerReady(false);
        await store.updateConfig({ ai_model_path: selectedModel });
        store.clearMessages();
        return true;
      } catch (e) {
        console.error("Failed to save path to AI model", e);
        store.setError("Failed to save path to AI model");
        store.setIsLoading(false);
        return false;
      }
    }
  };

  const handleSelectWhisperModel = async () => {
    const selectedModel = await open({
      multiple: false,
      filters: [{ name: "Whisper model", extensions: ["gguf"] }],
    });

    if (selectedModel && typeof selectedModel === "string") {
      try {
        store.setError("");
        await store.updateConfig({ whisper_model_path: selectedModel });
        return true;
      } catch (e) {
        console.error("Failed to save path to Whisper model", e);
        store.setError("Failed to save path to Whisper model");
        store.setIsLoading(false);
        return false;
      }
    }
  };

  const handleSelectApiModel = async ({
    modelName,
    apiKey,
  }: {
    modelName: string;
    apiKey: string;
  }) => {
    if (modelName && apiKey) {
      try {
        store.setError("");
        store.setIsServerReady(false);
        await store.updateConfig({
          api_key_masked: apiKey,
          ai_api_model: modelName,
        });
        store.clearMessages();
        return true;
      } catch (e) {
        console.error("Failed to save api model:", e);
        store.setError("Failed to save api model");
        store.setIsLoading(false);
        return false;
      }
    }
  };

  const handleSwitchAIEngine = async (type: "local" | "api") => {
    try {
      store.clearMessages();
      await store.updateConfig({ ai_engine_type: type });
    } catch (e) {
      console.error("Error ai switch updating:", e);
      store.setError("Error ai switch updating");
      store.setIsLoading(false);
    }
  };

  const handleSwitchEngineWhisper = async (type: "local" | "api") => {
    try {
      await store.updateConfig({ whisper_engine_type: type });
    } catch (e) {
      console.error("Error whisper switch updating:", e);
      store.setError("Error whisper switch updating");
      store.setIsLoading(false);
    }
  };

  const handleSelectIcon = async () => {
    const selectedIcon = await open({
      multiple: false,
      filters: [{ name: "Images", extensions: ["png", "jpg", "jpeg", "svg"] }],
    });

    if (selectedIcon && typeof selectedIcon === "string") {
      try {
        await store.updateConfig({ icon_path: selectedIcon });
      } catch (err) {
        console.error("Icon save failed:", err);
        store.setError("Icon save failed");
        store.setIsLoading(false);
      }
    }
  };

  return {
    handleSelectIcon,
    handleSelectApiModel,
    handleSwitchAIEngine,
    handleSelectAIModel,
    handleSelectWhisperModel,
    handleSwitchEngineWhisper,
  };
};
