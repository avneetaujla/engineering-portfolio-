import { Outlet } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-[4.25rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
