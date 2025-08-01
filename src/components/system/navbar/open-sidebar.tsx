
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useSidebarContext } from "@/context/closeSidebar";
import { Button } from "@/components/ui/button";
import { Sidebar } from "lucide-react";

export default function OpenSidebar() {
  const {toggleSidebar} = useSidebarContext()
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button
            className="h-7 w-7 mr-2"
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
          >
            <Sidebar/>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Open Sidebar
      </TooltipContent>
    </Tooltip>
  );
}
