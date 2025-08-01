import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useAssistantContext } from "@/context/assistant-context";
import { Bot } from "lucide-react";


export default function IaButton() {
    const {toggleAssistant} = useAssistantContext()
  return (
    <Tooltip>
        <TooltipTrigger>
            <Button
                className="h-7 w-7"
                variant="ghost"
                size="icon"
                onClick={toggleAssistant}
            >
                <Bot/>
            </Button>
        </TooltipTrigger>
        <TooltipContent>
            Asistente
        </TooltipContent>
    </Tooltip>
  )
}
