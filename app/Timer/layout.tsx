import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StudyTimer',
  description: 'A simple timer for studying',
}

export default function TimerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={``}>
          {children}
        </body>
    </html>
  )
}
