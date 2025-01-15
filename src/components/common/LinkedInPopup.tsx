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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, x: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.9, opacity: 0, x: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50
              bg-gradient-to-br from-gray-900 to-black border border-white/10
              rounded-2xl p-4 sm:p-6 w-full max-w-xs sm:max-w-md backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="linkedin-popup-title"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white
                transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0077b5] rounded-full flex items-center 
                justify-center mx-auto mb-3 sm:mb-4">
                <FaLinkedin size={28} className="text-white" />
              </div>
              
              <h3 id="linkedin-popup-title" className="text-xl sm:text-2xl font-bold text-white mb-2">
                Let's Connect!
              </h3>
              
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Follow me on LinkedIn to stay updated with my latest projects and professional journey.
              </p>

              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={handleFollow}
                  className="w-full py-2 sm:py-3 px-4 bg-[#0077b5] hover:bg-[#006396]
                    text-white rounded-full font-medium transition-colors
                    flex items-center justify-center space-x-2 focus:outline-none
                    focus:ring-2 focus:ring-white/50"
                >
                  <FaLinkedin size={18} className="sm:size-5" />
                  <span className="text-sm sm:text-base">Follow on LinkedIn</span>
                </button>

                <button
                  onClick={handleClose}
                  className="w-full py-2 sm:py-3 px-4 bg-white/5 hover:bg-white/10
                    text-gray-300 rounded-full font-medium transition-colors
                    focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <span className="text-sm sm:text-base">Maybe Later</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}