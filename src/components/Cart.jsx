export default function Cart({ open, onClose, items, updateQty }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl
                    transform transition-transform duration-300 ease-out
                    ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Your Cart {items.length > 0 && <span className="text-sm font-normal text-text-muted">({items.length})</span>}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100% - 180px)' }}>
          {items.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto text-gray-100 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <p className="text-text-muted font-semibold">Your cart is empty</p>
              <p className="text-text-muted text-sm mt-1">Add items to get started</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl hover:bg-gray-100/50 transition-colors">
                  <div className="w-16 h-16 rounded-lg bg-gray-200 flex-shrink-0 bg-cover bg-center shadow-sm"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-secondary truncate">{item.name}</h4>
                    <p className="text-primary font-bold text-sm mt-0.5">Rs.{item.price}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-white rounded-full border border-gray-200 shadow-sm">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-primary font-bold
                               hover:bg-gray-50 rounded-l-full transition-colors"
                    >
                      -
                    </button>
                    <span className="w-7 text-center font-semibold text-sm">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center text-primary font-bold
                               hover:bg-gray-50 rounded-r-full transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-5 space-y-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <span className="text-secondary font-semibold">Total</span>
              <span className="text-2xl font-extrabold text-primary">Rs.{total}</span>
            </div>
            <button className="w-full bg-primary text-white py-3.5 rounded-full font-bold text-lg
                             hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/30
                             active:scale-[0.98]">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
