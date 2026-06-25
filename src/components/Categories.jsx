const categories = [
  { name: 'All', icon: '🍕' },
  { name: 'Pizza', icon: '🍕' },
  { name: 'Sides', icon: '🍟' },
  { name: 'Drinks', icon: '🥤' },
  { name: 'Desserts', icon: '🍰' },
  { name: 'Deals', icon: '🏷️' },
  { name: 'Pasta', icon: '🍝' },
  { name: 'Wings', icon: '🍗' },
]

export default function Categories() {
  return (
    <section className="py-6 bg-white shadow-sm sticky top-16 z-40">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              className={`flex flex-col items-center gap-1.5 px-5 py-2.5 rounded-xl whitespace-nowrap
                         transition-all duration-200 flex-shrink-0
                         ${i === 0
                           ? 'bg-primary text-white shadow-md shadow-primary/30'
                           : 'bg-gray-100 text-secondary hover:bg-gray-200 hover:shadow-sm'}`}
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="text-xs font-semibold">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
