import { useEffect } from "react";
import { check } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";

export default function AutoUpdater() {
  useEffect(() => {
    (async () => {
      try {
        const update = await check();
        if (update) {
          console.log(
            `Nueva versión ${update.version} disponible desde ${update.date}. Notas: ${update.body}`
          );

          await update.downloadAndInstall((event) => {
            switch (event.event) {
              case "Started":
                console.log(`Descargando ${event.data.contentLength} bytes...`);
                break;
              case "Progress":
                console.log(`Progreso: ${event.data.chunkLength} bytes`);
                break;
              case "Finished":
                console.log("Descarga finalizada.");
                break;
            }
          });

          console.log("Actualización instalada. Reiniciando app...");
          await relaunch();
        } else {
          console.log("No hay actualizaciones disponibles.");
        }
      } catch (err) {
        console.error("Error al buscar actualización:", err);
      }
    })();
  }, []);

  return null;
}
