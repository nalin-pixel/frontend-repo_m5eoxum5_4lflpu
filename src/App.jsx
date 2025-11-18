import Header from './components/Header'
import MediaForm from './components/MediaForm'
import MediaGrid from './components/MediaGrid'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.07),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.06),transparent_35%)]"/>
      <div className="relative max-w-6xl mx-auto">
        <Header />

        <main className="px-6 pb-16 space-y-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">Ajoutez un film ou un jeu</h2>
            <p className="text-blue-300/70 text-sm">Créez rapidement des fiches à partir d'un titre et d'une année.</p>
            <MediaForm onCreated={null} />
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-white">Votre bibliothèque</h2>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 border border-blue-400/20">Films & Jeux</span>
            </div>
            <MediaGrid />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
