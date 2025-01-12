interface PlantCardProps {
  title: string
  description?: string
  price: number
  image: string
}

function PlantCard({ title, description, price, image }: PlantCardProps) {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-gray-300 text-sm mb-4">{description}</p>
          )}
          <p className="text-lg font-semibold mb-4">Rs. {price}/-</p>
          <button className="border border-white/20 hover:bg-white/10 px-4 py-2 rounded-full">
            Explore
          </button>
        </div>
        <img src={image} alt={title} className="w-32 h-32 object-cover" />
      </div>
    </div>
  )
}

export default PlantCard 