import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FloatingWhatsApp } from './FloatingWhatsApp'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-sand text-text-body antialiased selection:bg-coral/20 selection:text-coral-dark">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
