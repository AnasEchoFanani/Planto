import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout, LoadingOverlay, CursorFollower } from "@/components";
import { routes } from "@/config/routes";
import { CartProvider } from "@/context/CartContext";
import { AnimatePresence } from "framer-motion";
import CartSidebar from "@/components/cart/CartSidebar";

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

  return (
    <BrowserRouter>
      <CartProvider>
        <CursorFollower />
        {isLoading ? (
          <LoadingOverlay isLoading={true} />
        ) : (
          <>
            <AppRoutes />
            <CartSidebar />
          </>
        )}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;