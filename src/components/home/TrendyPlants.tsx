import { images } from "@/assets/images";
import { AddToCart } from "@/components";
import { ScrollAnimation } from '../ScrollAnimation';
import { HoverAnimation } from '../HoverAnimation';
import { motion } from 'framer-motion';

const trendyProducts = [
  {
    id: 7,
    name: "Monstera Deliciosa",
    description:
      "The Instagram-famous Swiss Cheese Plant. Its dramatic split leaves create a bold tropical statement in any modern space.",
    price: 79.99,
    image: images.plants.plant2,
    category: "Indoor Plant"
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    description:
      "The ultimate statement plant with large, violin-shaped leaves. This trendy beauty adds instant sophistication to any room.",
    price: 89.99,
    image: images.plants.plant3,
    category: "Indoor Plant"
  },
];

function TrendyPlants() {
  return (
    <section className="px-4 py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-200 to-green-300">
              Trending This Season
            </span>
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="slide-up" delay={0.1}>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Discover this season's most sought-after plants. These stunning
            varieties are carefully chosen to help you create an Instagram-worthy
            urban jungle.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {trendyProducts.map((product, index) => (
            <ScrollAnimation 
              key={product.id} 
              animation="scale" 
              delay={index * 0.1}
            >
              <div className="relative mt-24">
                {/* 3D Floating Image */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 pointer-events-none z-20"
                >
                  <div className="relative w-full h-full">
                    {/* Shadow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black/20 rounded-full blur-xl transform scale-x-150" />
                    
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,200,0,0.3)] pointer-events-auto cursor-pointer"
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                        rotateX: -10,
                        transition: { duration: 0.4 }
                      }}
                    />
                  </div>
                </motion.div>

                {/* Card Content */}
                <HoverAnimation 
                  animation="tilt"
                  className="bg-black/30 backdrop-blur-xl rounded-[2rem] p-8 pt-32 border border-white/10 relative overflow-visible group z-10"
                >
                  {/* Glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none rounded-[2rem]" />

                  <div className="relative z-10">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-medium text-white mb-1">
                            {product.name}
                          </h3>
                          <p className="text-gray-400">{product.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 text-xl font-medium">
                            ${product.price.toFixed(2)}
                          </div>
                          <HoverAnimation animation="bounce">
                            <AddToCart product={product} />
                          </HoverAnimation>
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverAnimation>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendyPlants;
