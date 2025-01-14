import { images } from "@/assets/images";
import { AddToCart } from "@/components";
import { motion } from "framer-motion";
import { FaLeaf, FaStar, FaShippingFast } from "react-icons/fa";

const plantList = [
  {
    id: 1,
    name: "Peace Lily",
    description:
      "Elegant white blooms and glossy leaves make this air-purifying plant a perfect choice for bringing tranquility to any room.",
    price: 49.99,
    image: images.plants.plant1,
  },
  {
    id: 2,
    name: "Snake Plant",
    description:
      "A striking and hardy plant that thrives on neglect. Perfect for busy plant parents and known for removing indoor toxins.",
    price: 39.99,
    image: images.plants.plant2,
  },
  {
    id: 3,
    name: "Chinese Evergreen",
    description:
      "Beautiful variegated leaves that brighten up shady corners. One of the most forgiving houseplants you can grow.",
    price: 44.99,
    image: images.plants.plant3,
  },
  {
    id: 4,
    name: "ZZ Plant",
    description:
      "With its shiny, dark green leaves, this nearly indestructible plant tolerates low light and irregular watering.",
    price: 54.99,
    image: images.plants.plant4,
  },
  {
    id: 5,
    name: "Golden Pothos",
    description:
      "A versatile trailing vine with marbled leaves. Watch it climb or cascade - perfect for shelves and hanging baskets.",
    price: 34.99,
    image: images.plants.plant5,
  },
  {
    id: 6,
    name: "Spider Plant",
    description:
      "A cheerful, fast-growing plant that produces adorable babies. Great for hanging baskets and air purification.",
    price: 29.99,
    image: images.plants.plant6,
  },
];

function Plants() {
  return (
    <section className="min-h-screen px-4 py-12 md:py-16 bg-gradient-to-b from-black/40 to-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <span className="text-green-400 text-lg font-medium mb-4 block">
              🌿 Discover Nature's Beauty
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Our Plant Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Discover our carefully curated selection of indoor plants, perfect for bringing life and beauty to your space
          </motion.p>
        </div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <FaLeaf className="text-green-400 text-2xl mr-4" />
            <div>
              <h3 className="text-white font-semibold">Premium Quality</h3>
              <p className="text-gray-400 text-sm">Hand-picked healthy plants</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <FaShippingFast className="text-green-400 text-2xl mr-4" />
            <div>
              <h3 className="text-white font-semibold">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">Free shipping on all orders</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <FaStar className="text-green-400 text-2xl mr-4" />
            <div>
              <h3 className="text-white font-semibold">Expert Care</h3>
              <p className="text-gray-400 text-sm">Care guide with each plant</p>
            </div>
          </div>
        </motion.div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {plantList.map((plant, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              key={plant.id}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-green-500/20 rounded-[2rem] transform group-hover:scale-105 transition-transform duration-300 -z-10" />
              <div className="bg-black/30 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 relative overflow-hidden">
                <motion.div 
                  className="relative mb-8 h-72 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-300" />
                  <motion.img
                    src={plant.image}
                    alt={plant.name}
                    className="w-64 h-64 object-contain relative z-10
                      drop-shadow-[0_20px_50px_rgba(0,200,0,0.2)]
                      group-hover:drop-shadow-[0_30px_70px_rgba(0,200,0,0.3)]"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                    {plant.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {plant.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <p className="text-xl font-semibold text-white">
                      ${plant.price.toFixed(2)}
                    </p>
                    <AddToCart product={plant} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plants;
