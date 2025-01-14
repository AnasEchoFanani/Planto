import { useCart } from "@/context/CartContext";
import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import { memo, useCallback, useMemo } from "react";
import { Image } from "@/components";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const CartItem = memo(function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: {
  item: CartItem;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}) {
  const formattedPrice = useMemo(() => item.price.toFixed(2), [item.price]);

  const handleDecrement = useCallback(() => {
    onUpdateQuantity(item.quantity - 1);
  }, [item.quantity, onUpdateQuantity]);

  const handleIncrement = useCallback(() => {
    onUpdateQuantity(item.quantity + 1);
  }, [item.quantity, onUpdateQuantity]);

  return (
    <div className="flex gap-4 bg-black/20 rounded-2xl p-4 border border-white/5">
      <Image
        src={item.image}
        alt={item.name}
        width={96}
        height={96}
        className="w-24 h-24 object-cover"
        loading="lazy"
      />
      <div className="flex-1">
        <h3 className="text-white font-medium">{item.name}</h3>
        <p className="text-green-400">${formattedPrice}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={handleDecrement}
            disabled={item.quantity <= 1}
            className="text-white hover:text-green-400 transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-green-400/50 hover:bg-green-400/10 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Decrease quantity"
          >
            <FaMinus size={12} />
          </button>
          <span className="text-white w-8 text-center">{item.quantity}</span>
          <button
            onClick={handleIncrement}
            className="text-white hover:text-green-400 transition-all duration-300 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-green-400/50 hover:bg-green-400/10"
            aria-label="Increase quantity"
          >
            <FaPlus size={12} />
          </button>
          <button
            onClick={onRemove}
            className="ml-auto text-red-400 hover:text-red-300 transition-all duration-300 px-3 py-1 rounded-full hover:bg-red-400/10"
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
});

function CartSidebar() {
  const { isOpen, toggleCart, items, removeItem, updateQuantity, total } = useCart();

  const handleUpdateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity >= 1) {
      updateQuantity(id, quantity);
    }
  }, [updateQuantity]);

  const handleRemoveItem = useCallback((id: number) => {
    removeItem(id);
  }, [removeItem]);

  const formattedTotal = useMemo(() => total.toFixed(2), [total]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleCart}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-black/90 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Your Cart</h2>
            <button
              onClick={toggleCart}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Close cart"
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
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={(quantity) => handleUpdateQuantity(item.id, quantity)}
                    onRemove={() => handleRemoveItem(item.id)}
                  />
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center text-white mb-6">
                  <span className="text-lg">Total:</span>
                  <span className="text-xl font-semibold">${formattedTotal}</span>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl transition-colors">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
}

export default memo(CartSidebar);
