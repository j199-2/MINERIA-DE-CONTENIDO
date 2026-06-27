import './globals.css'

export const metadata = {
  title: 'Minería de Contenido - NextGen Creators',
  description: 'Radar de rastreo bilingüe de miniseries',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#050608]">{children}</body>
    </html>
  )
}
