import { useState } from 'react'
import MenuCard from '../components/MenuCard'
import { menuItems } from '../data/menuData'

const categories = ['All', ...new Set(menuItems.map(i => i.category))]

export default function MenuPage({ addToCart }) {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = menuItems.filter(i => {
    const matchCat = active === 'All' || i.category === active
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase()) ||
                        i.desc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-b from-primary to-primary-dark text-white py-12 sm:py-16">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">Our Menu</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl">Explore our full range of freshly prepared pizzas, sides, drinks, and desserts.</p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 pb-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200
                            ${active === cat
                              ? 'bg-primary text-white shadow-md shadow-primary/30'
                              : 'bg-gray-100 text-secondary hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search menu..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200
                           focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                           focus:bg-white text-sm transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {filtered.map(item => (
              <MenuCard key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-text-muted">
              <svg className="w-16 h-16 mx-auto text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-lg font-semibold">No items found</p>
              <p className="text-sm mt-1">Try a different search or category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
