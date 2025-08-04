import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "../theme/theme-provider"
import { TooltipContent, TooltipTrigger, Tooltip } from "@/components/ui/tooltip"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Tooltip>
        <TooltipTrigger>
            <Button
            className="w-7 h-7"
            size="icon"
            variant="ghost"
            onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
                {theme === "dark" ? <Sun/> : <Moon/>}
            </Button>
        </TooltipTrigger>
        <TooltipContent>
            {theme === "dark" ? "Tema claro" : "Tema oscuro"}
        </TooltipContent>
    </Tooltip>
  )
}