function CustomerReviews() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Customer Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-black/20 backdrop-blur-sm rounded-3xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={`/avatar${item}.jpg`} alt="Avatar" className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold">Customer Name</h3>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews 