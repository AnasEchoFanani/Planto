import { memo } from 'react'
import { useCart } from '@/context/CartContext'
import { FaPlus } from 'react-icons/fa'

interface AddToCartProps {
  product: {
    id: number
    name: string
    price: number
    image: string
  }
  className?: string
}

export const AddToCart = memo(function AddToCart({ product, className = '' }: AddToCartProps) {
  const { addItem } = useCart()

  return (
    <button
      onClick={() => addItem(product)}
      className={`bg-black/20 backdrop-blur-sm border border-white/10 
        hover:bg-white/10 w-10 h-10 rounded-full text-white 
        flex items-center justify-center transition-colors 
        relative z-50 ${className}`}
    >
      <FaPlus size={16} />
    </button>
  )
}) 