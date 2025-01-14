import { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, LoadingSpinner } from "@/components";
import { routes } from "@/config/routes";
import { CartProvider } from "@/context/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import CartSidebar from "@/components/cart/CartSidebar";

function App() {
  useEffect(() => {
    // Initialize AOS with performance optimized settings
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
      disable: window.innerWidth < 768, // Disable on mobile for better performance
    });
  }, []);

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
                    <Suspense fallback={<LoadingSpinner />}>
                      <div data-aos="fade-up">
                        <Element />
                      </div>
                    </Suspense>
                  }
                />
              ))}
            </Route>
          </Routes>
          <CartSidebar />
        </Suspense>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
