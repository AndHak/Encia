import { Icon } from "@iconify/react/dist/iconify.js";
import "../../../styles/Navbar.css";
import BackArrow from "./back-arrow";
import IaButton from "./ia-button";
import NextArrow from "./next-arrow";
import OpenSidebar from "./open-sidebar";
import WindowControls from "./windows-controls";
import { NavbarMenubar } from "./navbar-menubar";
import SearchAll from "./search-all";
import { ModeToggle } from "./theme-mode";

export default function WindowsNavbar() {
    return (
        <div className="relative flex bg-background draggable top-0 h-10 p-0 border-b z-50 w-full justify-between items-center">
            <div className="justify-start items-center no-drag flex">
                <div className="flex w-full pt-0.5 text-center items-center gap-2 px-4 no-drag">
                    <Icon
                        icon="streamline-logos:xsplit-logo-solid"
                        width="24"
                        height="24"
                    />
                </div>
                <NavbarMenubar />
            </div>

            <div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center no-drag h-full z-50">
                    <div className="gap-2 flex -translate-x-4">
                      <div className="gap-1">
                        <BackArrow />
                        <NextArrow /> 
                      </div>
                        <SearchAll />
                        <IaButton />
                    </div>
                </div>
            </div>

            <div className="justify-end h-full p-0 m-0 text-muted-foreground no-drag flex gap-2">
                <div className="items-center h-full flex gap-1">
                    <ModeToggle/>
                    <OpenSidebar />
                </div>
                <WindowControls />
            </div>
        </div>
    );
}
