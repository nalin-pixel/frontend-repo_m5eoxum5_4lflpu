import { useEffect, useState } from 'react'

function Card({ item }) {
  return (
    <div className="bg-slate-800/60 border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition">
      {item.poster_url ? (
        <img src={item.poster_url} alt={item.title} className="w-full h-44 object-cover" />
      ) : (
        <div className="w-full h-44 bg-slate-900 flex items-center justify-center text-blue-300/60 text-sm">Aucune image</div>
      )}
      <div className="p-3">
        <div className="text-white font-medium truncate">{item.title}</div>
        <div className="text-blue-300/70 text-xs">{item.type === 'movie' ? 'Film' : 'Jeu'}{item.year ? ` • ${item.year}` : ''}</div>
      </div>
    </div>
  )
}

export default function MediaGrid({ filterType }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (filterType) params.set('type', filterType)
      if (q) params.set('q', q)
      const res = await fetch(`${baseUrl}/media?${params.toString()}`)
      const data = await res.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [filterType])

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Rechercher un titre..." className="flex-1 bg-slate-900 text-blue-100 border border-blue-500/30 rounded px-3 py-2" />
        <button onClick={load} className="bg-slate-700 hover:bg-slate-600 text-blue-100 rounded px-3 py-2">Chercher</button>
      </div>
      {loading ? (
        <div className="text-blue-300/70">Chargement...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {items.map(it => <Card key={it.id} item={it} />)}
        </div>
      )}
    </div>
  )
}
