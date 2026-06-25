import { useState, useEffect } from 'react'

const slides = [
  {
    title: 'Taste the Best Pizza in Town',
    subtitle: 'Made fresh every day, served hot 24/7',
    cta: 'Order Now',
    bg: 'from-primary to-primary-dark',
  },
  {
    title: 'Exclusive Online Deals',
    subtitle: 'Get discounts when you order through our website',
    cta: 'View Deals',
    bg: 'from-primary-dark to-primary',
  },
  {
    title: 'Family Meal Deals',
    subtitle: 'Feeding the whole family? Try our combo offers',
    cta: 'Explore Combos',
    bg: 'from-primary to-red-700',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent(c => (c + 1) % slides.length)

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="relative h-[420px] sm:h-[480px] md:h-[560px] lg:h-[620px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${slide.bg}
                       transition-all duration-700 ease-in-out
                       ${i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
          >
            <div className="text-center text-white px-6 sm:px-10 md:px-16 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <button className="bg-white text-primary px-10 py-3.5 rounded-full font-bold text-lg
                               hover:bg-gray-100 transition-all duration-200 shadow-xl
                               active:scale-95 hover:shadow-2xl">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40
                     text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                     transition-all duration-200 hover:scale-110 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40
                     text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                     transition-all duration-200 hover:scale-110 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center gap-2 pb-6 -mt-6 relative z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300
                      ${i === current ? 'bg-white w-8' : 'bg-white/40 w-2.5 hover:bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
