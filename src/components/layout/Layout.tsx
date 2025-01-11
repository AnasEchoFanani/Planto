import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout 