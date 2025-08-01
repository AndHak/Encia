import PrincipalPage from "@/components/system/content/principal-page";

export default function RootPage() {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
        <section className="h-full">
          <PrincipalPage/>
        </section>
    </main>
  )
}
