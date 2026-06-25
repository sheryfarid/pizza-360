import { Link } from 'react-router-dom'
import { deals } from '../data/menuData'

const homeDeals = deals.slice(0, 3)

export default function Deals({ addToCart }) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/[0.04] to-transparent">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary">
              Hot Deals
            </h2>
            <p className="text-text-muted text-sm mt-1.5">Limited time offers — grab them while they last</p>
          </div>
          <Link to="/deals" className="text-primary font-semibold text-sm hover:underline underline-offset-4 transition-all whitespace-nowrap">
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {homeDeals.map(deal => (
            <div
              key={deal.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 sm:h-48 bg-gray-200 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${deal.image})` }}
                />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {Math.round((1 - deal.price / deal.originalPrice) * 100)}% OFF
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-lg text-secondary">{deal.name}</h3>
                <p className="text-text-muted text-sm mt-1.5 leading-relaxed">{deal.desc}</p>
                <div className="flex items-center justify-between mt-5">
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
                    className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold
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
    </section>
  )
}
