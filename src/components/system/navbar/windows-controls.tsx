import { getCurrentWindow } from '@tauri-apps/api/window'
import { Icon } from '@iconify/react'

const appWindow = getCurrentWindow()

export default function WindowControls() {


  return (
    <div className='no-drag ml-auto flex h-full items-center'>
      <div className="flex h-full">
        {/* Minimize */}
        <button
          onClick={() => appWindow.minimize()}
          className="no-drag flex items-center justify-center h-full w-10 hover:bg-accent"
        >
          <Icon icon="mdi-light:minus" width="20" height="20" />
        </button>

        {/* Restore / Maximize */}
        <button
          onClick={() => appWindow.toggleMaximize()}
          className="no-drag flex items-center justify-center h-full w-10 hover:bg-accent"
        >
          <Icon icon="qlementine-icons:windows-unmaximize-16" width="16" height="16" />
        </button>

        {/* Close */}
        <button
          onClick={() => appWindow.close()}
          className="no-drag flex items-center justify-center h-full w-12 hover:bg-red-500"
        >
          <Icon icon="material-symbols-light:close" width="20" height="20" />
        </button>
      </div>
    </div>
  )
}
