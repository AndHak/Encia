import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchAll() {
  return (
    <Button variant="secondary" aria-placeholder="Busca cualquier cosa" className="w-lg h-7 cursor-pointer">
        <Search/>
        Busca cualquier cosa
    </Button>
  )
}
