import PrincipalPage from "@/components/system/content/principal-page";
import WindowsNavbar from "@/components/system/navbar/windows-navbar";
import Statebar from "@/components/system/statebar/statebar";

export default function RootPage() {
    return (
        <main className="h-screen flex flex-col overflow-hidden">
            <header>
                <WindowsNavbar />
            </header>
            <section className="h-full">
                <PrincipalPage />
            </section>
            <footer>
              <Statebar/>
            </footer>
        </main>
    );
}
