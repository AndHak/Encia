import "../../../styles/Navbar.css"
import BackArrow from "./back-arrow";
import { NavbarMenubar } from "./navbar-menubar";
import NextArrow from "./next-arrow";
import WindowControls from "./windows-controls";
import { Icon } from "@iconify/react";


export default function WindowsNavbar() {

    return (
        <div className="relative flex bg-background draggable top-0 h-10 p-0 border-b z-50 w-full justify-between items-center">
            <div className="justify-start items-center no-drag flex">
                <div className="flex w-full pt-0.5 text-center items-center gap-2 px-4 no-drag">
                    <Icon icon="streamline-logos:xsplit-logo-solid" width="24" height="24" />
                </div>
                <NavbarMenubar />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center justify-center no-drag h-full">
                <BackArrow/>
                <NextArrow/>
            </div>

            <div className="justify-end h-full p-0 m-0 text-muted-foreground no-drag">
                <WindowControls />
            </div>
        </div>

    );
}
