import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaTimes } from 'react-icons/fa';

export function LinkedInPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds on every page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleFollow = () => {
    window.open('https://www.linkedin.com/in/anas-fanani/', '_blank');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
              bg-gradient-to-br from-gray-900 to-black border border-white/10
              rounded-2xl p-6 w-full max-w-md backdrop-blur-xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white
                transition-colors"
            >
              <FaTimes size={20} />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0077b5] rounded-full flex items-center 
                justify-center mx-auto mb-4">
                <FaLinkedin size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Let's Connect!
              </h3>
              
              <p className="text-gray-400 mb-6">
                Follow me on LinkedIn to stay updated with my latest projects and professional journey.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleFollow}
                  className="w-full py-3 px-4 bg-[#0077b5] hover:bg-[#006396]
                    text-white rounded-full font-medium transition-colors
                    flex items-center justify-center space-x-2"
                >
                  <FaLinkedin size={20} />
                  <span>Follow on LinkedIn</span>
                </button>

                <button
                  onClick={handleClose}
                  className="w-full py-3 px-4 bg-white/5 hover:bg-white/10
                    text-gray-300 rounded-full font-medium transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
