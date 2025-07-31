import PrincipalPage from "@/components/system/content/principal-page";
import WindowsNavbar from "../components/system/navbar/windows-navbar";
import Statebar from "@/components/system/statebar/statebar";

export default function RootPage() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
        <header className="shrink-0">
            <WindowsNavbar/>
        </header>
        <main className="h-full">
          <PrincipalPage/>
        </main>
        <footer className="shrink-0">
          <Statebar/>
        </footer>
    </main>
  )
}
