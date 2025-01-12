import { useEffect, useState, useRef } from 'react'
import { FaTimes, FaSearch } from 'react-icons/fa'
import { useDebounce } from '@/hooks'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [mounted, setMounted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
      inputRef.current?.focus()
    } else {
      const timer = setTimeout(() => setMounted(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Search Container */}
      <div 
        className={`relative w-full max-w-3xl px-4 transition-all duration-500 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
        }`}
      >
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-4 md:p-6">
          <div className="flex items-center gap-4">
            <FaSearch className="text-gray-400 text-lg md:text-xl" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for plants..."
              className="flex-1 bg-transparent text-white text-lg md:text-xl placeholder-gray-400 focus:outline-none"
            />
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Search Results */}
          <div className="mt-8 space-y-4">
            {/* Add your search results here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchOverlay 