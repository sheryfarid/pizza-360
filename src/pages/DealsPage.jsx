import { deals } from '../data/menuData'

export default function DealsPage({ addToCart }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/[0.04] to-white">
      <div className="bg-gradient-to-b from-primary to-primary-dark text-white py-12 sm:py-16">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">Hot Deals</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl">Limited-time offers and exclusive combos — save big on your favorites.</p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14">
        <div className="flex items-center gap-3 text-text-muted text-sm mb-8">
          <span className="font-semibold text-secondary">{deals.length} deals available</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>Limited time offers</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {deals.map(deal => (
            <div
              key={deal.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-52 bg-gray-200 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${deal.image})` }}
                />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {Math.round((1 - deal.price / deal.originalPrice) * 100)}% OFF
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-xl text-secondary">{deal.name}</h3>
                <p className="text-text-muted text-sm mt-2 leading-relaxed">{deal.desc}</p>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-primary">
                      Rs.{deal.price}
                    </span>
                    <span className="text-sm text-text-muted line-through">
                      Rs.{deal.originalPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(deal)}
                    className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold
                             hover:bg-primary-dark transition-all duration-200 active:scale-95 shadow-md shadow-primary/30"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
