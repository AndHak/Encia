import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Icon } from "@iconify/react";


export default function NextArrow() {
  return (
    <Tooltip>
        <TooltipTrigger asChild>
            <button className="rounded-sm hover:bg-accent p-0.5 cursor-pointer">
                <Icon icon="formkit:arrowright" width="22" height="22" />
            </button>
        </TooltipTrigger>
        <TooltipContent>
            <p>Hacia delante (Alt + ArrowRight)</p>
        </TooltipContent>
    </Tooltip>
  )
}
