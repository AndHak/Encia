import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";

export default function NextArrow() {
    return (
        <Tooltip>
            <TooltipTrigger>
                <Button variant="ghost" className="h-7 w-7" size="icon">
                    <ArrowRight />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Hacia delante (Alt + ArrowRight)</p>
            </TooltipContent>
        </Tooltip>
    );
}
