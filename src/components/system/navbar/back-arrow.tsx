import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Icon } from "@iconify/react";

export default function BackArrow() {
  return (
    <Tooltip>
        <TooltipTrigger asChild>
            <button className="rounded-sm hover:bg-accent p-0.5 cursor-pointer">
                <Icon icon="formkit:arrowleft" width="22" height="22" />
            </button>
        </TooltipTrigger>
        <TooltipContent>
            <p>Volver (Alt + ArrowLeft)</p>
        </TooltipContent>
    </Tooltip>

  )
}
