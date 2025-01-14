import { customerReviews } from "@/constants/plants";
import { images } from "@/assets/images";

function CustomerReviews() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Customer Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="bg-black/20 backdrop-blur-sm rounded-3xl p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={
                    images.avatars[
                      `avatar${review.id}` as keyof typeof images.avatars
                    ]
                  }
                  alt={review.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
