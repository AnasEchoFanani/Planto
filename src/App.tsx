import { Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout, LoadingSpinner, CartSidebar } from '@/components'
import { routes } from '@/config/routes'
import { CartProvider } from '@/context/CartContext'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      delay: 50,
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom'
    })
  }, [])

  return (
    <CartProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map(({ path, element: Element }) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <div data-aos="fade-up">
                      <Element />
                    </div>
                  }
                />
              ))}
            </Route>
          </Routes>
        </Suspense>
        <CartSidebar />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
