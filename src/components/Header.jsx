import { Film, Gamepad2, Star } from "lucide-react"

export default function Header() {
  return (
    <header className="px-6 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
          <Star className="w-6 h-6 text-blue-300" />
        </div>
        <div>
          <h1 className="text-white text-xl font-semibold leading-tight">Cine+Play</h1>
          <p className="text-blue-200/70 text-xs">Vos films et jeux, notés et partagés</p>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-blue-200/80">
        <div className="flex items-center gap-1"><Film className="w-4 h-4"/> <span className="text-xs">Films</span></div>
        <span className="opacity-40">•</span>
        <div className="flex items-center gap-1"><Gamepad2 className="w-4 h-4"/> <span className="text-xs">Jeux</span></div>
      </div>
    </header>
  )
}
