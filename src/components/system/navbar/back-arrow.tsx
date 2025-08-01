import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft } from "lucide-react";

export default function BackArrow() {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Button variant="ghost" className="h-7 w-7" size="icon">
                    <ArrowLeft />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Volver (Alt + ArrowLeft)</p>
            </TooltipContent>
        </Tooltip>
    );
}
