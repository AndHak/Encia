import {
  Menubar,
} from "@/components/ui/menubar"
import { MenubarFile } from "./menubar-file"

export function NavbarMenubar() {
  return (
    <Menubar className="hover:bg-accent">
        <MenubarFile/>
    </Menubar>
  )
}
