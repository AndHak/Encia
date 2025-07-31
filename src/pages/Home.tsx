import { useState } from "react"

export default function Home() {

    const [count, setCount] = useState(0)

    const handleAumentar = () => {
        setCount(count => count + 1)
    }

    const handleDisminuir = () => {
        setCount(count => count - 1)
    }

  return (
    <div className="h-full justify-center items-baseline mt-10 flex gap-8">
        <button className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-md font-semibold text-md" onClick={handleDisminuir}>
            Disminuir
        </button>
        <h2 className="font-semibold text-2xl transition-all duration-300">{count}</h2>
        <button className="bg-neutral-900 text-white px-2.5 py-1.5 rounded-md font-semibold text-md" onClick={handleAumentar}>
            Aumentar
        </button>
    </div>
  )
}
