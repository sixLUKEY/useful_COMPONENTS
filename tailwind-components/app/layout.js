import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Components',
  description: 'Useful components for modern websites',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' bg-gray-100 dark:bg-slate-900'>
      <body className=' max-w-5xl mx-auto dark:text-white text-black'>
        <Navbar/>
        {children}</body>
    </html>
  )
}
