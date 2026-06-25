import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Deals from '../components/Deals'
import MenuSection from '../components/MenuSection'

export default function Home({ addToCart }) {
  return (
    <>
      <Hero />
      <Categories />
      <Deals addToCart={addToCart} />
      <MenuSection addToCart={addToCart} />
    </>
  )
}
