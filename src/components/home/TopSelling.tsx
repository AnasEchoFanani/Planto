import { images } from '@/assets/images'
import { AddToCart } from '@/components'

const products = [
  {
    id: 1,
    name: "Peace Lily",
    description: "Elegant white blooms and glossy leaves make this air-purifying plant a perfect choice for bringing tranquility to any room.",
    price: 49.99,
    image: images.plants.plant1
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "A striking and hardy plant that thrives on neglect. Perfect for busy plant parents and known for removing indoor toxins.",
    price: 39.99,
    image: images.plants.plant2
  },
  {
    id: 3,
    name: "Chinese Evergreen",
    description: "Beautiful variegated leaves that brighten up shady corners. One of the most forgiving houseplants you can grow.",
    price: 44.99,
    image: images.plants.plant3
  },
  {
    id: 4,
    name: "ZZ Plant",
    description: "With its shiny, dark green leaves, this nearly indestructible plant tolerates low light and irregular watering.",
    price: 54.99,
    image: images.plants.plant4
  },
  {
    id: 5,
    name: "Golden Pothos",
    description: "A versatile trailing vine with marbled leaves. Watch it climb or cascade - perfect for shelves and hanging baskets.",
    price: 34.99,
    image: images.plants.plant5
  },
  {
    id: 6,
    name: "Spider Plant",
    description: "A cheerful, fast-growing plant that produces adorable babies. Great for hanging baskets and air purification.",
    price: 29.99,
    image: images.plants.plant6
  }
]

function TopSelling() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center"
          data-aos="fade-up"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-200 to-green-300">
            Most Loved Plants
          </span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          Our customers' favorites, chosen for their beauty and ease of care. Each plant is 
          hand-selected to bring natural elegance to your space while being surprisingly easy to maintain.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-black/30 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10 group relative overflow-visible"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none rounded-[2rem]" />
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-green-500/10 to-transparent rounded-full blur-2xl transform scale-150" />
                <div className="relative mb-6 -mt-20 h-72 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-64 h-64 object-contain transform 
                      group-hover:scale-125 group-hover:-translate-y-4 
                      transition-all duration-300 ease-out
                      drop-shadow-[0_20px_50px_rgba(0,200,0,0.2)]
                      group-hover:drop-shadow-[0_30px_70px_rgba(0,200,0,0.3)]
                      z-0"
                  />
                </div>
              </div>
              
              <div className="relative z-20 space-y-3">
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-semibold text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <AddToCart product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopSelling 