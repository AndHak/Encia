import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Sidebar from "../sidebar/sidebar";
import Home from "@/pages/Home";
import WindowsNavbar from "../navbar/windows-navbar";
import { useSidebarContext } from "@/context/closeSidebar";
import { useAssistantContext } from "@/context/assistant-context";
import Assistant from "../assistant/assistant";
import Statebar from "../statebar/statebar";

export default function PrincipalPage() {
    const { sidebarExpanded } = useSidebarContext();
    const { assistantExpanded } = useAssistantContext();

    return (
        <main className="h-screen">
            <header className="h-12">
                <WindowsNavbar />
            </header>
            <PanelGroup id="sidebar-panel" direction="horizontal" className="flex h-full" autoSaveId="sidebar-panel">
                <Panel
                    className={`overflow-hidden ${
                        sidebarExpanded ? "" : "w-0 min-w-0 max-w-0"
                    }`}
                    defaultSize={20}
                    minSize={10}
                    maxSize={30}
                >
                    <Sidebar />
                </Panel>
                {sidebarExpanded && <PanelResizeHandle className="border-r" />}
                <Panel className="flex flex-col">
                    <main className="h-full">
                        <Home />
                    </main>
                    defaultSize={60}
                    minSize={60}
                    maxSize={100}
                </Panel>
                <PanelResizeHandle className="border-l" />
                <Panel
                    className={`overflow-hidden ${
                        assistantExpanded ? "" : "w-0 min-w-0 max-w-0"
                    }`}
                    defaultSize={20}
                    minSize={10}
                    maxSize={30}
                >
                    <Assistant />
                </Panel>
            </PanelGroup>
            <footer>
                <Statebar />
            </footer>
        </main>
    );
}
