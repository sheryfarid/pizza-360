import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuCard from './MenuCard'
import { menuItems } from '../data/menuData'

const homeItems = menuItems.slice(0, 8)
const categories = ['All', ...new Set(menuItems.map(i => i.category))]

export default function MenuSection({ addToCart }) {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = homeItems.filter(i => {
    const matchCat = active === 'All' || i.category === active
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase()) ||
                        i.desc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary">
              Our Menu
            </h2>
            <p className="text-text-muted text-sm mt-1.5">Freshly prepared, always delicious</p>
          </div>

          <Link to="/menu" className="text-primary font-semibold text-sm hover:underline underline-offset-4 transition-all whitespace-nowrap self-end">
            View Full Menu &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
    </section>
  )
}
