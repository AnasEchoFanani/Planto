import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { images } from '@/assets/images'
import { useState, useCallback, memo } from 'react'
import { useCart } from '@/context/CartContext'
import { SearchOverlay, MenuOverlay } from '@/components'
import { useWindowEvent } from '@/hooks/useWindowEvent'

// const HeaderContent = memo(function HeaderContent({ 
//   isScrolled, 
//   isVisible, 
//   toggleCart, 
//   itemCount,
//   onSearchClick,
//   onMenuClick 
// }: {
//   isScrolled: boolean
//   isVisible: boolean
//   toggleCart: () => void
//   itemCount: number
//   onSearchClick: () => void
//   onMenuClick: () => void
// }) {
//   return (
//     <nav className="max-w-7xl mx-auto px-4 py-4">
//       <div className="flex items-center justify-between text-white">
//         {/* Logo */}
//         <Link to="/" className="flex-shrink-0">
//           <img src={images.logo} alt="Planta" className="h-8 w-auto" />
//         </Link>
//
//         {/* Navigation */}
//         <div className="hidden md:flex space-x-8">
//           <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
//           <Link to="/plants" className="hover:text-green-400 transition-colors">Plants</Link>
//           <Link to="/more" className="hover:text-green-400 transition-colors">More</Link>
//           <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
//         </div>
//
//         {/* Actions */}
//         <div className="flex items-center gap-4">
//           <button onClick={onSearchClick} className="hover:text-green-400 transition-colors">
//             <FaSearch size={20} />
//           </button>
//           <button onClick={toggleCart} className="hover:text-green-400 transition-colors relative">
//             <FaShoppingCart size={20} />
//             {itemCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                 {itemCount}
//               </span>
//             )}
//           </button>
//           <button onClick={onMenuClick} className="md:hidden hover:text-green-400 transition-colors">
//             <span className="sr-only">Menu</span>
//             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   )
// })

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { toggleCart, items } = useCart()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    setIsScrolled(currentScrollY > 0)
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useWindowEvent('scroll', handleScroll, { passive: true }, 50) // Reduced debounce time

  return (
    <>
      <header 
        className={`fixed w-full z-40 transform transition-all duration-300 ease-in-out
          ${!isVisible ? '-translate-y-full' : 'translate-y-0'}
          ${isScrolled ? 'bg-black/20 backdrop-blur-md' : 'bg-transparent'}`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-white">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={images.logo} alt="Planta" className="h-8 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
              <Link to="/plants" className="hover:text-green-400 transition-colors">Plants</Link>
              <Link to="/more" className="hover:text-green-400 transition-colors">More</Link>
              <Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Auth Buttons - Desktop Only */}
              <div className="hidden md:flex items-center gap-3">
                <Link 
                  to="/signin" 
                  className="px-4 py-2 text-white/90 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup"
                  className="px-4 py-2 bg-green-600/20 hover:bg-green-600/30 
                    border border-green-500/30 rounded-full text-white 
                    transition-all duration-300 hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>

              {/* Search Button */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 flex items-center justify-center hover:text-green-400 transition-colors"
              >
                <FaSearch size={18} />
              </button>

              {/* Cart Button */}
              <button 
                onClick={toggleCart}
                className="w-10 h-10 flex items-center justify-center hover:text-green-400 transition-colors relative"
              >
                <FaShoppingCart size={18} />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full text-xs flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <SearchOverlay 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <MenuOverlay 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  )
}

export default memo(Header) 