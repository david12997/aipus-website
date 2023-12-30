
import { Changa } from 'next/font/google'
import './globals.css'
import { getServerSession } from 'next-auth'
import SessionProvider from './../../components/session/session.provider'

const inter = Changa({ subsets: ['latin'] })

export default async function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {

  const session = await getServerSession()

  return (
    <html lang="es">
      <body className={inter.className}>
        
        <SessionProvider session={session}>
         
          {children}
        </SessionProvider>
      
      </body>
    </html>
  )
}
