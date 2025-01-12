import { useCart } from '@/context/CartContext'
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa'
import { memo } from 'react'
import { Image } from '@/components'

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

const CartItem = memo(function CartItem({ 
  item, 
  onUpdateQuantity, 
  onRemove 
}: {
  item: CartItem
  onUpdateQuantity: (quantity: number) => void
  onRemove: () => void
}) {
  return (
    <div className="flex gap-4 bg-black/20 rounded-2xl p-4 border border-white/5">
      <Image 
        src={item.image} 
        alt={item.name}
        width={96}
        height={96}
        className="w-24 h-24"
      />
      <div className="flex-1">
        <h3 className="text-white font-medium">{item.name}</h3>
        <p className="text-green-400">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button 
            onClick={() => onUpdateQuantity(item.quantity - 1)}
            className="text-white hover:text-green-400 transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-green-400/50 hover:bg-green-400/10"
          >
            <FaMinus size={12} />
          </button>
          <span className="text-white w-8 text-center">{item.quantity}</span>
          <button 
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            className="text-white hover:text-green-400 transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-green-400/50 hover:bg-green-400/10"
          >
            <FaPlus size={12} />
          </button>
          <button 
            onClick={onRemove}
            className="ml-auto text-red-400 hover:text-red-300 transition-all duration-300 px-3 py-1 rounded-full hover:bg-red-400/10"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
})

function CartSidebar() {
  const { isOpen, toggleCart, items, removeItem, updateQuantity, total } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleCart}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-black/90 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Your Cart</h2>
            <button 
              onClick={toggleCart}
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-white/60">
              Your cart is empty
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto">
                {items.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
                    onRemove={() => removeItem(item.id)}
                  />
                ))}
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-white">
                  <span>Total:</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 transform hover:-translate-y-0.5">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default memo(CartSidebar) 