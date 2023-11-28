import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Amadou's Site",
  description: 'In Memoriam - Amadou Bah',
  icons: {
    icon: '/gambia.png',
},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
