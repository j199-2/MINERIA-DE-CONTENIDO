'use client'

import { useState } from 'react'

export default function Home() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleFetchTrends = async () => {
    setLoading(true)
    setResults([])
    setHasSearched(true)

    try {
      const response = await fetch('/api/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      const json = await response.json()
      if (json.success) {
        setResults(json.data)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen text-white bg-[#050608] font-sans flex flex-col items-center justify-start p-4 md:p-8">
      <div className="w-full max-w-4xl flex flex-col items-center">
        
        <header className="text-center mt-20 mb-12 w-full">
          <div className="text-[10px] font-black tracking-[0.5em] text-blue-500 uppercase mb-3">
            NEXTGEN CREATORS ECOSYSTEM • RASTREO MULTILINGÜE ACTIVO
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-5 uppercase">
            MINERIA DE CONTENIDO
          </h1>
          <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto italic leading-relaxed border-t border-b border-gray-900 py-4">
            Herramienta automatizada de navegación bilingüe. Esta plataforma funciona exclusivamente como un directorio de redirección; no distribuye, aloja ni reproduce el material de forma directa, únicamente te dirige a las páginas web externas donde se encuentra publicado el contenido original.
          </p>
        </header>

        <div className="w-full flex justify-center mb-16">
          <button
            onClick={handleFetchTrends}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest px-12 py-5 rounded-2xl transition-all border border-blue-500/20 shadow-lg shadow-blue-600/20 active:scale-95 disabled:opacity-50 cursor-pointer text-center"
          >
            {loading ? "🔍 Minando fuentes externas (ESP / ENG)..." : "📰 Iniciar Minería de Dramas"}
          </button>
        </div>

        <div className="w-full space-y-6">
          {loading && (
            <div className="flex flex-col items-center justify-center py-20 gap-4 bg-[#0d0e12]/40 border border-purple-900/20 rounded-2xl">
              <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-purple-400 font-mono tracking-widest uppercase animate-pulse">
                IA barriendo bases de datos internacionales en dos idiomas...
              </p>
            </div>
          )}

          {!hasSearched && !loading && (
            <div className="text-center py-16 bg-[#0d0e12]/20 border border-dashed border-gray-900 rounded-3xl max-w-md mx-auto">
              <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                Presiona el botón superior para ordenar al sistema que localice las páginas externas con series verticales en tendencia.
              </p>
            </div>
          )}

          {hasSearched && !loading && results.map((drama, idx) => (
            <div key={idx} className="bg-[#0d0e12] border border-gray-800/40 hover:border-purple-500/30 rounded-2xl p-6 transition-all shadow-xl grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="border-b md:border-b-0 md:border-r border-gray-800/40 pb-4 md:pb-0 md:pr-4 flex flex-col justify-between gap-4">
                <div>
                  <div className="text-[9px] uppercase font-black text-purple-400 tracking-wider mb-1">Métrica de Tráfico</div>
                  <div className="text-xs font-black text-white bg-[#050608] px-2.5 py-1.5 rounded-lg border border-purple-900/20 w-fit">{drama.viralRate}</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase font-black text-emerald-400 tracking-wider mb-1">Acceso Detectado</div>
                  <div className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 w-fit">{drama.freeEpisodes}</div>
                </div>
                <div>
                  <div className="text-[9px] uppercase font-black text-blue-400 tracking-wider mb-1">Idioma de Origen</div>
                  <div className="text-xs font-bold text-gray-300">{drama.lang}</div>
                </div>
              </div>

              <div className="md:col-span-2 flex flex-col justify-center">
                <h3 className="text-xl font-black text-white tracking-tight">{drama.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mt-3 bg-[#050608] p-3 rounded-xl border border-gray-900/60">
                  <strong className="text-purple-400 block text-[9px] uppercase tracking-wider mb-1">Análisis del Argumento:</strong>
                  {drama.plot}
                </p>
              </div>

              <div className="flex flex-col justify-center items-stretch pt-4 md:pt-0 md:pl-4 border-t md:border-t-0 md:border-l border-gray-800/40">
                <div className="text-center mb-3">
                  <span className="text-[9px] text-gray-500 block uppercase font-bold tracking-wider">Alojado en:</span>
                  <span className="text-xs font-black text-gray-300 block mt-0.5">{drama.platformName}</span>
                </div>
                <a href={drama.directUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-black py-3 px-4 rounded-xl text-xs text-center transition-all shadow-md flex items-center justify-center gap-2 no-underline">
                  <span>Visitar Página Externa</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
