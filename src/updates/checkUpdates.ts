import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';

export async function verificarActualizacion() {
  try {
    const update = await check();

    if (update) {
      console.log(
        `Encontrada versión ${update.version} del ${update.date}. Notas: ${update.body}`
      );

      let downloaded = 0;
      let contentLength: number | undefined = 0;

      await update.downloadAndInstall((event) => {
        switch (event.event) {
          case 'Started':
            contentLength = event.data.contentLength;
            console.log(`Descargando ${contentLength} bytes...`);
            break;
          case 'Progress':
            downloaded += event.data.chunkLength;
            console.log(`Descargado ${downloaded} de ${contentLength}`);
            break;
          case 'Finished':
            console.log('Descarga finalizada');
            break;
        }
      });

      console.log('Actualización instalada, reiniciando app...');
      await relaunch();
    } else {
      console.log('No hay actualizaciones disponibles');
    }
  } catch (error) {
    console.error('Error al buscar actualizaciones:', error);
  }
}
