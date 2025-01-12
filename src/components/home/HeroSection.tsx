import { Link } from 'react-router-dom'
import { FaLeaf, FaBookOpen, FaShieldAlt } from 'react-icons/fa'

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl" data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Discover the</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-200 to-green-300">
              Joy of Growing
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Experience the magic of indoor gardening with our premium plant collection. 
            From air-purifying varieties to low-maintenance beauties, find the perfect 
            green companion for your space.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/plants"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full 
                text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Shop Plants
            </Link>
            <Link 
              to="/guides"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm 
                border border-white/10 rounded-full text-white font-medium 
                transition-all duration-300 hover:scale-105"
            >
              Care Guides
            </Link>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center
                transition-all duration-300 group-hover:bg-green-500/20">
                <FaLeaf className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-green-400 transition-colors">
                  Natural Air Purifiers
                </h3>
                <p className="text-gray-400 text-sm">
                  NASA-approved plants that remove indoor toxins
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center
                transition-all duration-300 group-hover:bg-green-500/20">
                <FaBookOpen className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-green-400 transition-colors">
                  Expert Care Support
                </h3>
                <p className="text-gray-400 text-sm">
                  Detailed guides and ongoing plant care tips
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center
                transition-all duration-300 group-hover:bg-green-500/20">
                <FaShieldAlt className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-green-400 transition-colors">
                  Happiness Guaranteed
                </h3>
                <p className="text-gray-400 text-sm">
                  30-day plant health guarantee & free shipping over $50
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 