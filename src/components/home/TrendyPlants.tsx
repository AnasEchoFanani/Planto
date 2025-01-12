import { images } from '@/assets/images'
import { AddToCart } from '@/components'

const trendyProducts = [
  {
    id: 7,
    name: "Monstera Deliciosa",
    description: "The Instagram-famous Swiss Cheese Plant. Its dramatic split leaves create a bold tropical statement in any modern space.",
    price: 79.99,
    image: images.plants.plant2
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    description: "The ultimate statement plant with large, violin-shaped leaves. This trendy beauty adds instant sophistication to any room.",
    price: 89.99,
    image: images.plants.plant3
  }
]

function TrendyPlants() {
  return (
    <section className="px-4 py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center"
          data-aos="fade-up"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-200 to-green-300">
            Trending This Season
          </span>
        </h2>
        
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          Discover this season's most sought-after plants. These stunning varieties are 
          carefully chosen to help you create an Instagram-worthy urban jungle.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {trendyProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-black/30 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 relative overflow-visible group"
              data-aos={index === 0 ? "fade-right" : "fade-left"}
            >
              {/* Glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none rounded-[2rem]" />
              
              <div className="flex justify-between items-start relative">
                <div className="flex flex-col gap-4 relative z-20">
                  <h3 className="text-2xl font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-2xl font-semibold text-white">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex gap-3">
                    <button className="bg-green-600/20 backdrop-blur-sm border border-green-500/30 hover:bg-green-500/30 px-6 py-2 rounded-full text-white transition-colors">
                      Buy Now
                    </button>
                    <AddToCart product={product} />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-radial from-green-500/10 to-transparent rounded-full blur-2xl transform scale-150" />
                  <div className="relative -mt-20 h-72 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-64 h-64 object-contain 
                        transform -translate-y-12 
                        group-hover:scale-125 group-hover:-translate-y-16 
                        transition-all duration-300 ease-out
                        drop-shadow-[0_20px_50px_rgba(0,200,0,0.2)]
                        group-hover:drop-shadow-[0_30px_70px_rgba(0,200,0,0.3)]
                        z-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendyPlants 