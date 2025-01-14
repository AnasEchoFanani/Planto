import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components";
import { images } from "@/assets/images";
import { memo } from "react";

const Background = memo(() => (
  <>
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${images.background})`,
        zIndex: -2,
      }}
    />
    <div
      className="fixed inset-0 bg-gradient-to-b from-black/80 to-black/95"
      style={{ zIndex: -1 }}
    />
  </>
));

function Layout() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
