export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary to-primary-dark text-white py-12 sm:py-16">
        <div className="px-4 sm:px-6 md:px-10 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">Contact Us</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">Send us a message</h2>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200
                                 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                                 focus:bg-white text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200
                                 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                                 focus:bg-white text-sm transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200
                               focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                               focus:bg-white text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more..."
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200
                               focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                               focus:bg-white text-sm transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm
                           hover:bg-primary-dark transition-all duration-200 active:scale-95 shadow-md shadow-primary/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">Get in touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Phone</h3>
                    <p className="text-text-muted text-sm mt-0.5">021-111-360-360</p>
                    <p className="text-text-muted text-sm">Mon-Sun, 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Email</h3>
                    <p className="text-text-muted text-sm mt-0.5">info@pizza360.com</p>
                    <p className="text-text-muted text-sm">We reply within 2 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Location</h3>
                    <p className="text-text-muted text-sm mt-0.5">123 Pizza Street, Food Court</p>
                    <p className="text-text-muted text-sm">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-secondary mb-4">Operating Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-text-muted">Monday - Sunday</span>
                  <span className="font-semibold text-secondary">24/7</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-text-muted">Delivery</span>
                  <span className="font-semibold text-secondary">24/7</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-text-muted">Pickup</span>
                  <span className="font-semibold text-secondary">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
