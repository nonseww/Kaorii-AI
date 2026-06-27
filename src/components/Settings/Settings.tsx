import { useState } from "react";
import { useConfig } from "../../hooks/useConfig";
import { useAppStore } from "../../store/useAppStore";
import { SettingField } from "../../ui/SettingField";
import classes from "./Settings.module.scss";

export const Settings = () => {
  const store = useAppStore();
  const {
    handleSelectAIModel,
    handleSelectIcon,
    handleSelectApiModel,
    handleSwitchAIEngine,
    handleSelectWhisperModel,
    handleSwitchEngineWhisper,
  } = useConfig();
  const [openrouterData, setOpenrouterData] = useState<{
    modelName: string;
    apiKey: string;
  }>({
    modelName: store.config.ai_api_model ?? "",
    apiKey: store.config.api_key_masked ?? "",
  });

  const [openrouterWhisperData, setOpenrouterWhisperData] = useState<{
    modelName: string;
    apiKey: string;
  }>({
    modelName: store.config.whisper_api_model ?? "",
    apiKey: store.config.api_key_masked ?? "",
  });

  const handleAiModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenrouterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhisperChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenrouterWhisperData((prev) => ({
      ...prev,
      [e.target.name]: e.target,
    }));
  };

  const handleAiSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await handleSelectApiModel(openrouterData);
  };

  const handleWhisperSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    // await handleSelectWhisperModel(openrouterWhisperData);
  };

  console.log(
    "store.config.engine_whisper_type",
    store.config.whisper_engine_type,
  );

  return (
    <div className={classes.settings}>
      <SettingField label="Local GGUF Model">
        <>
          <div className={classes.engineTypeContainer}>
            {store.config.ai_engine_type === "local" ? (
              <label>Active</label>
            ) : (
              <button onClick={() => handleSwitchAIEngine("local")}>
                Activate
              </button>
            )}
          </div>
          <input
            value={store.config.ai_model_path ?? "No model selected..."}
            readOnly
          />
          <button onClick={handleSelectAIModel}>Choose model</button>
        </>
      </SettingField>

      <SettingField label="OpenRouter AI Model">
        <>
          <div className={classes.engineTypeContainer}>
            {store.config.ai_engine_type === "api" ? (
              <label>Active</label>
            ) : (
              <button onClick={() => handleSwitchAIEngine("api")}>
                Activate
              </button>
            )}
          </div>
          <input
            value={openrouterData.modelName}
            onChange={handleAiModelChange}
            placeholder="Model name"
            required
            name="modelName"
          />
          <input
            value={openrouterData.apiKey}
            onChange={handleAiModelChange}
            placeholder="API Key"
            required
            name="apiKey"
          />
          <form className={classes.buttonsContainer}>
            <button onClick={() => {}}>Delete API Key</button>
            <button type="submit" onClick={handleAiSubmit}>
              Save
            </button>
          </form>
        </>
      </SettingField>

      <SettingField label="Local Whisper Model">
        <>
          <div className={classes.engineTypeContainer}>
            {store.config.whisper_engine_type === "local" ? (
              <label>Active</label>
            ) : (
              <button onClick={() => handleSwitchEngineWhisper("local")}>
                Activate
              </button>
            )}
          </div>
          <input
            value={store.config.whisper_model_path ?? "No model selected..."}
            readOnly
          />
          <button onClick={handleSelectWhisperModel}>Choose model</button>
        </>
      </SettingField>

      <SettingField label="OpenRouter Whisper Model">
        <>
          <div className={classes.engineTypeContainer}>
            {store.config.whisper_engine_type === "api" ? (
              <label>Active</label>
            ) : (
              <button onClick={() => handleSwitchEngineWhisper("api")}>
                Activate
              </button>
            )}
          </div>
          <input
            value={openrouterWhisperData.modelName}
            onChange={handleWhisperChange}
            placeholder="Model name"
            required
            name="modelName"
          />
          <input
            value={openrouterWhisperData.apiKey}
            onChange={handleWhisperChange}
            placeholder="API Key"
            required
            name="apiKey"
          />
          <form className={classes.buttonsContainer}>
            <button onClick={() => {}}>Delete API Key</button>
            <button type="submit" onClick={handleWhisperSubmit}>
              Save
            </button>
          </form>
        </>
      </SettingField>

      <SettingField label="Local Widget's Icon">
        <>
          <input
            value={store.config.icon_path ?? "No icon selected..."}
            readOnly
          />
          <button onClick={handleSelectIcon}>Choose icon</button>
        </>
      </SettingField>
    </div>
  );
};
