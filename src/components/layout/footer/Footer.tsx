import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      
      <div className="bg-black/30 backdrop-blur-xl border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-white mb-4"
              >
                Planto
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 max-w-md"
              >
                Bringing nature's beauty into your space with our carefully curated collection of indoor plants.
              </motion.p>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white font-semibold mb-4"
              >
                Quick Links
              </motion.h4>
              <motion.ul 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/plants" className="text-gray-400 hover:text-green-400 transition-colors">
                    Shop Plants
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white font-semibold mb-4"
              >
                Connect
              </motion.h4>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex space-x-4"
              >
                <a
                  href="https://github.com/AnasEchoFanani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anas-fanani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://instagram.com/anasfanani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-400 text-sm"
              >
                {currentYear} Planto. Designed with {' '}
                <a
                  href="https://github.com/AnasEchoFanani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Anas Fanani
                </a>
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex space-x-6 mt-4 md:mt-0"
              >
                <Link to="/privacy" className="text-gray-400 text-sm hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 text-sm hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
