import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import DealsPage from './pages/DealsPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i)
        .filter(i => i.qty > 0)
    )
  }

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="min-h-screen bg-bg-main">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
          <Route path="/deals" element={<DealsPage addToCart={addToCart} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        updateQty={updateQty}
      />
    </div>
  )
}

export default App
