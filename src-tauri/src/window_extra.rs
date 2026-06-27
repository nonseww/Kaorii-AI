use std::thread;
use std::time::Duration;
use enigo::Enigo;
use enigo::KeyboardControllable;
use serde::Deserialize;
use serde::Serialize;

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Default)]
#[serde(rename_all = "lowercase")]
pub enum AppState {
     #[default]
    Small,
    Chat,
    Full
}

#[tauri::command]
pub fn resize_window(window: tauri::WebviewWindow, state: AppState) {
    let (w, h) = match state {
        AppState::Small => (70.0, 70.0),
        AppState::Chat => (450.0, 600.0),
        AppState::Full => (1200.0, 800.0)
    };

    let _ = window.set_size(tauri::LogicalSize::new(w, h));

    #[cfg(target_os = "linux")]
    {
        if let Ok(gtk_window) = window.gtk_window() {
            use gtk::prelude::*;
            gtk_window.set_size_request(w as i32, h as i32);
        }
    }

    if state != AppState::Small {
        let _ = window.unminimize();
        let _ = window.show();
        let _ = window.set_focus();
    }
}

#[tauri::command]
pub fn copy_selected_text() {
    let mut enigo = Enigo::new();
    thread::sleep(Duration::from_millis(300));

    enigo.key_down(enigo::Key::Control);
    enigo.key_click(enigo::Key::Layout('c'));
    enigo.key_up(enigo::Key::Control);
}

#[tauri::command]
pub fn move_app_to_side(window: tauri::WebviewWindow, side: String) -> Result<(), String> {
    if let Ok(Some(monitor)) = window.current_monitor() {
        let scale_factor = monitor.scale_factor();
         let start_pos = window.outer_position().unwrap_or_default().to_logical::<f64>(scale_factor);

        let work_area = monitor.work_area();
        let window_size = window.outer_size().unwrap_or_default().to_logical::<f64>(scale_factor);

        let work_area_logical_pos = work_area.position.to_logical::<f64>(scale_factor);
        let work_area_logical_size = work_area.size.to_logical::<f64>(scale_factor);

        let y = start_pos.y;
        let x = if side == "left" {
            work_area_logical_pos.x
        } else {
            work_area_logical_pos.x + work_area_logical_size.width - window_size.width
        };

        window.set_position(tauri::LogicalPosition::new(x, y)).map_err(|e| e.to_string())?;
    }
    Ok(())
}