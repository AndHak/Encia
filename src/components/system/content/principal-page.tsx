import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Sidebar from "../sidebar/sidebar";
import Home from "@/pages/Home";
import { useSidebarContext } from "@/context/closeSidebar";
import { useAssistantContext } from "@/context/assistant-context";
import Assistant from "../assistant/assistant";

export default function PrincipalPage() {
    const { sidebarExpanded } = useSidebarContext();
    const { assistantExpanded } = useAssistantContext();

    return (
        <PanelGroup
            id="sidebar-panel"
            direction="horizontal"
            className="flex h-full"
            autoSaveId="sidebar-panel"
        >
            <Panel
                className={`overflow-hidden ${
                    sidebarExpanded ? "" : "w-0 min-w-0 max-w-0"
                }`}
                minSize={10}
                maxSize={30}
                defaultSize={25}
                order={1}
            >
                <Sidebar />
            </Panel>
            {sidebarExpanded && <PanelResizeHandle className="border-r" />}
            <Panel maxSize={100} order={2}>
                <main className="h-full">
                    <Home />
                </main>
            </Panel>
            <PanelResizeHandle className="border-l" />
            <Panel
                className={`overflow-hidden ${
                    assistantExpanded ? "" : "w-0 min-w-0 max-w-0"
                }`}
                minSize={10}
                maxSize={30}
                defaultSize={25}
                order={3}
            >
                <Assistant />
            </Panel>
        </PanelGroup>
    );
}
