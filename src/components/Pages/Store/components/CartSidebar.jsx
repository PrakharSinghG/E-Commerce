import React from "react";
import { useCart } from "../../../../contexts/CartContext";

const CartSidebar = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

 return (
    <div className="w-80 bg-white rounded-lg p-4 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">CART</h2>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-red-500 text-lg hover:text-red-600 transition"
            title="Clear cart"
          >
            🗑️
          </button>
        )}
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-8">
            What's stopping you, designer?
          </p>

          <div className="space-y-4 text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <span>📍</span>
              <span>Home</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>📅</span>
              <span>Select date</span>
            </div>
          </div>

          <button className="w-full bg-gray-500 text-white py-2 rounded mt-8 hover:bg-gray-600 transition">
            order now
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6 mb-6">
            {cart.map((item) => (
              <div key={item.cartId} className="flex gap-4 items-start">
                {/* Image section with remove button */}
                <div className="relative w-24 h-24">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="absolute -top-2 -left-2 bg-white border border-gray-300 rounded-full p-1 hover:bg-gray-100 text-red-500 text-sm font-bold"
                  >
                    ✕
                  </button>
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="font-semibold text-sm">{item.name}</p>
                    <p className="text-xs text-gray-600">by {item.brand}</p>
                  </div>
                  <p className="font-medium text-sm">Rs. {item.price}/-</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="space-y-4 text-gray-600">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Home</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>Select date</span>
            </div>
            <div className="flex items-center justify-between font-semibold mt-2">
              <span>Total:</span>
              <span>Rs. {total}/-</span>
            </div>
          </div>

          {/* Order Button */}
          <button className="w-full bg-black text-white py-2 rounded mt-6 hover:bg-gray-800 transition">
            order now
          </button>
        </>
      )}
    </div>
  );
};


export default CartSidebar;
