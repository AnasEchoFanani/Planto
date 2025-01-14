import { images } from "@/assets/images";
import { AddToCart } from "@/components";

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
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-white">
          Our Plant Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {plantList.map((plant) => (
            <div
              key={plant.id}
              className="bg-black/30 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10 group relative overflow-visible"
            >
              <div className="relative mb-6 h-72 flex items-center justify-center">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-64 h-64 object-contain transform 
                    group-hover:scale-125 transition-all duration-300 ease-out
                    drop-shadow-[0_20px_50px_rgba(0,200,0,0.2)]
                    group-hover:drop-shadow-[0_30px_70px_rgba(0,200,0,0.3)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-white">{plant.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {plant.description}
              </p>
              <p className="text-lg font-semibold text-white">
                ${plant.price.toFixed(2)}
              </p>
              <div className="flex justify-between items-center pt-2">
                <AddToCart product={plant} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Plants;
