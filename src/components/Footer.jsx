export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-16">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-extrabold text-lg">360</span>
              </div>
              <span className="text-xl font-bold">Pizza 360</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Made fresh every day and served hot. Order now for the ultimate pizza experience.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Menu', 'Deals', 'Locations', 'Contact'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-primary transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400 text-sm">021-111-360-360</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400 text-sm">info@pizza360.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-gray-400">Mon - Sun</span>
                <span className="font-semibold text-white">24/7</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-400">Delivery</span>
                <span className="font-semibold text-white">24/7</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {['facebook', 'instagram', 'twitter'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center
                           hover:bg-primary hover:text-white transition-all duration-200 text-gray-400
                           hover:shadow-lg hover:shadow-primary/30"
                  aria-label={social}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pizza 360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
