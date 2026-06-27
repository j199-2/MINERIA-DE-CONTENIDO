import { NextResponse } from 'next/server'

const DRAMA_LIVE_FEED = [
  {
    title: "The Double Life of My Billionaire Husband",
    viralRate: "98% 🔥 Ultra Viral",
    lang: "Español / Inglés Sub",
    freeEpisodes: "15 Capítulos Gratis",
    plot: "Se casa en secreto con un hombre que todos desprecian, descubriendo el misterio de que es el magnate más poderoso de la ciudad.",
    platformName: "FreeReelss",
    directUrl: "https://www.freereelss.com/drama/68bf85c176078d774201a83e"
  },
  {
    title: "Groom Divided: The Double Identity",
    viralRate: "94% 🚀 Nueva Tendencia",
    lang: "Inglés / Sub Español",
    freeEpisodes: "12 Capítulos Gratis",
    plot: "Un heredero se hace pasar por su hermano gemelo desaparecido para descubrir quién intentó acabar con su familia y ejecutar su fría venganza.",
    platformName: "ShortMax Web Player",
    directUrl: "https://www.shortmax.tv/es/video/groom-divided"
  },
  {
    title: "El Heredero Secreto de la Mafia",
    viralRate: "92% 🔥 Muy Buscado",
    lang: "Español Latam",
    freeEpisodes: "80 Capítulos Libres",
    plot: "Un conserje humillado resulta ser el líder absoluto de una organización internacional. Toda la serie disponible en formato vertical sin cortes.",
    platformName: "YouTube Player",
    directUrl: "https://www.youtube.com/watch?v=S8p7yY0oFwE"
  }
]

export async function POST() {
  // Simulación de escaneo en tiempo real de la IA
  await new Promise((resolve) => setTimeout(resolve, 1200))
  
  return NextResponse.json({ 
    success: true, 
    data: DRAMA_LIVE_FEED 
  })
}
