import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from 'react';
const Layout = lazy(() => import('@/components/layout/Layout'));
const LoadingOverlay = lazy(() => import('@/components/LoadingOverlay'));
const CursorFollower = lazy(() => import('@/components/CursorFollower'));
const CartSidebar = lazy(() => import('@/components/cart/CartSidebar'));
import { routes } from "@/config/routes";
import { CartProvider } from "@/context/CartContext";
import { AnimatePresence } from "framer-motion";

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element: Element }) => (
            <Route
              key={path}
              path={path}
              element={<Element />}
            />
          ))}
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    };

    // Initial load
    handleLoad();

    // Add refresh event listener
    window.addEventListener('beforeunload', handleLoad);
    return () => window.removeEventListener('beforeunload', handleLoad);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <Suspense fallback={<div>Loading...</div>}>
          {width > 768 && <CursorFollower />}
          {isLoading ? (
            <LoadingOverlay isLoading={true} />
          ) : (
            <>
              <AppRoutes />
              <CartSidebar />
            </>
          )}
        </Suspense>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;