import { useState } from 'react'

export default function MediaForm({ onCreated }) {
  const [type, setType] = useState('movie')
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [poster_url, setPoster] = useState('')
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/media`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, title, year: year ? Number(year) : null, poster_url: poster_url || null })
      })
      const data = await res.json()
      if (res.ok) {
        onCreated && onCreated()
        setTitle('')
        setYear('')
        setPoster('')
      } else {
        alert(data.detail || 'Erreur lors de la création')
      }
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-5 gap-3">
      <select value={type} onChange={e=>setType(e.target.value)} className="col-span-1 bg-slate-900 text-blue-100 border border-blue-500/30 rounded px-3 py-2">
        <option value="movie">Film</option>
        <option value="game">Jeu</option>
      </select>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Titre" className="col-span-2 bg-slate-900 text-blue-100 border border-blue-500/30 rounded px-3 py-2" />
      <input value={year} onChange={e=>setYear(e.target.value)} placeholder="Année" className="col-span-1 bg-slate-900 text-blue-100 border border-blue-500/30 rounded px-3 py-2" />
      <button disabled={loading} className="col-span-1 bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2 disabled:opacity-50">{loading ? 'Ajout...' : 'Ajouter'}</button>
    </form>
  )
}
