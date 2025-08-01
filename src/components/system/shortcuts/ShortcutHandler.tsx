
import { useHotkeys } from "react-hotkeys-hook"
import { useAssistantContext } from "@/context/assistant-context"
import { useSidebarContext } from "@/context/closeSidebar"

export default function ShortcutHandler() {
  const { toggleAssistant } = useAssistantContext()
  const { toggleSidebar } = useSidebarContext()

  useHotkeys("ctrl+i", () => toggleAssistant(), { preventDefault: true })
  useHotkeys("ctrl+b", () => toggleSidebar(), { preventDefault: true })

  return null
}
