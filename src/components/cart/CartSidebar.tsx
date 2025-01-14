import { useCart } from "@/context/CartContext";
import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import { memo, useCallback, useMemo } from "react";
import { Image } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import './CartSidebar.css';

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
  const { isOpen, closeCart, items, removeItem, updateQuantity, total } = useCart();

  const handleUpdateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity >= 1) {
      updateQuantity(id, quantity);
    }
  }, [updateQuantity]);

  const handleRemoveItem = useCallback((id: number) => {
    removeItem(id);
  }, [removeItem]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={closeCart}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-black/90 backdrop-blur-xl z-50 p-6 cart-sidebar"
          >
            <div className="flex flex-col h-full">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-between items-center mb-6"
              >
                <h2 className="text-xl font-semibold text-white">Your Cart</h2>
                <motion.button
                  onClick={closeCart}
                  className="text-white/60 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes size={24} />
                </motion.button>
              </motion.div>

              <AnimatePresence mode="popLayout">
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex-1 flex items-center justify-center text-white/60"
                  >
                    Your cart is empty
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex-1 space-y-4 overflow-y-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <AnimatePresence mode="popLayout">
                      {items.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CartItem
                            item={item}
                            onUpdateQuantity={(quantity) => handleUpdateQuantity(item.id, quantity)}
                            onRemove={() => handleRemoveItem(item.id)}
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              {items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <div className="flex justify-between items-center text-white mb-6">
                    <span className="text-lg">Total:</span>
                    <motion.span 
                      className="text-xl font-semibold"
                      key={total}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      ${total.toFixed(2)}
                    </motion.span>
                  </div>
                  <motion.button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Checkout
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default memo(CartSidebar);
