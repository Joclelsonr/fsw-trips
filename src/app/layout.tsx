import { AuthProvider } from '@/providers/auth'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700", "800"] })

export const metadata = {
  title: 'FSW Trips',
  description: 'Sistema de reservas de viagens',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={poppins.className}>
        <AuthProvider>
        {children}
        </AuthProvider>
        </body>
    </html>
  )
}
