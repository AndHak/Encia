import Company from "./company";
import SidebarContent from "./sidebar-content";

export default function Sidebar() {
  return (
    <section className="flex flex-col z-50 bg-global-background h-full shadow-md">
      <header className="justify-center w-full h-50 items-center ">
        <Company/>
      </header>
      <div className="h-full">
        <SidebarContent/>
      </div>
    </section>
  )
}
