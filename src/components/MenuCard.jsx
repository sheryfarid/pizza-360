export default function MenuCard({ item, addToCart }) {
  return (
    <div className="group bg-card-bg rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-36 sm:h-40 bg-gray-100 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        {item.discount && (
          <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow">
            {item.discount}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-bold text-secondary text-sm leading-tight group-hover:text-primary transition-colors">{item.name}</h3>
        <p className="text-text-muted text-xs mt-1 line-clamp-2 leading-relaxed">{item.desc}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-primary font-extrabold text-base">Rs.{item.price}</span>
          <button
            onClick={() => addToCart(item)}
            className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center
                       hover:bg-primary-dark transition-all duration-200 active:scale-90
                       hover:shadow-md hover:shadow-primary/40"
            aria-label={`Add ${item.name} to cart`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
