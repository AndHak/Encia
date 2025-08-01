import { Icon } from "@iconify/react/dist/iconify.js"

export default function Company() {
  return (
    <div className="flex justify-center items-center h-full gap-4">
        <div>
            <Icon icon="icon-park-outline:teeth" width="50" height="50" className="stroke-2"/>
        </div>
        <div>
          <span className="text-[50px] font-semibold text-purple-300">ENCIA</span>
        </div>
    </div>
  )
}
