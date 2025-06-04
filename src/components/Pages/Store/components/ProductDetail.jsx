import React, { useState } from "react";
import CartSidebar from "./CartSidebar";

const patterns = ["checkered", "striped", "plain"];
const colors = ["gray", "black", "white"];
const sizes = ["7", "8", "9", "10"];

const ProductDetail = ({ product, onClose, cart, onAddToCart }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    front: "checkered",
    middle: "checkered",
    back: "checkered",
    sole: "gray",
    size: "8",
  });
  const [userRating, setUserRating] = useState(0);

  const handleOptionChange = (part, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [part]: option,
    }));
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedOptions);
    onClose();
  };

  const getPatternIcon = (pattern, isSelected = false) => {
    const baseClass = `w-8 h-6 border ${
      isSelected ? "border-gray-600" : "border-gray-300"
    }`;

    if (pattern === "checkered") {
      return (
        <div className={`${baseClass} bg-white relative overflow-hidden`}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='checker' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3crect fill='%23000' x='0' width='10' height='10'/%3e%3crect fill='%23000' x='10' y='10' width='10' height='10'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23checker)'/%3e%3c/svg%3e")`,
              backgroundSize: "8px 8px",
            }}
          ></div>
        </div>
      );
    } else if (pattern === "striped") {
      return <div className={`${baseClass} bg-blue-400`}></div>;
    } else {
      // plain
      return (
        <div className={`${baseClass} bg-blue-300 relative`}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='dots' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3ccircle fill='%23fff' cx='10' cy='10' r='3'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23dots)'/%3e%3c/svg%3e")`,
              backgroundSize: "12px 12px",
            }}
          ></div>
        </div>
      );
    }
  };

  const getColorBox = (color, isSelected = false) => {
    const colorMap = {
      black: "bg-black",
      white: "bg-white border-gray-300",
      gray: "bg-gray-400",
    };

    return (
      <div
        className={`w-8 h-6 border-2 ${
          isSelected ? "border-gray-600" : "border-gray-300"
        } ${colorMap[color]}`}
      >
        {isSelected && color === "gray" && (
          <div className="w-full h-full flex items-center justify-center text-white text-xs">
            ✓
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row p-6 bg-gray-50 min-h-screen">
      {/* Main Product View */}
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <span className="text-2xl">&larr;</span>
            <span className="text-lg">your design space</span>
          </button>
        </div>

        <div className="flex gap-2">
          {/* Product Images */}
          <div className="flex-1">
            <div className="flex gap-8">
              {/* Main Image */}
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-8 mb-4 flex items-center justify-center h-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain"
                    style={{width: 'auto', height: 'auto'}}
                  />
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex flex-col gap-3 mb-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-36 h-36 bg-gray-100 rounded border flex items-center justify-center"
                  >
                    <img
                      src={product.image}
                      alt={`Thumbnail ${i}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <p className="text-sm text-gray-600 mb-2">Rate product</p>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setUserRating(star)}
                    className={`text-lg ${
                      star <= userRating ? "text-yellow-400" : "text-gray-300"
                    } focus:outline-none`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="px-6 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50">
                share design
              </button>
              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-black text-white rounded text-sm hover:bg-gray-800"
              >
                add to cart
              </button>
            </div>
          </div>

          {/* Product Info & Customization */}
          <div className="w-80 pl-4">
            <h1 className="text-xl font-bold mb-1">{product.name}</h1>
            <p className="text-sm text-gray-600 mb-1">by {product.brand}</p>

            {/* Star Rating Display */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-sm ${
                      star <= 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {product.reviews} reviews
              </span>
            </div>

            <p className="text-lg font-bold mb-1">Rs. {product.price}/-</p>
            {product.offer && (
              <p className="text-xs text-orange-600 mb-6">{product.offer}</p>
            )}

            {/* Customization Options */}
            <div className="space-y-4">
              {/* Front Pattern */}
              <div>
                <p className="text-sm font-medium mb-2">Front</p>
                <div className="flex gap-2">
                  {patterns.map((pattern) => (
                    <button
                      key={pattern}
                      onClick={() => handleOptionChange("front", pattern)}
                      className="focus:outline-none"
                    >
                      {getPatternIcon(
                        pattern,
                        selectedOptions.front === pattern
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Middle Pattern */}
              <div>
                <p className="text-sm font-medium mb-2">Middle</p>
                <div className="flex gap-2">
                  {patterns.map((pattern) => (
                    <button
                      key={pattern}
                      onClick={() => handleOptionChange("middle", pattern)}
                      className="focus:outline-none"
                    >
                      {getPatternIcon(
                        pattern,
                        selectedOptions.middle === pattern
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Back Pattern */}
              <div>
                <p className="text-sm font-medium mb-2">Back</p>
                <div className="flex gap-2">
                  {patterns.map((pattern) => (
                    <button
                      key={pattern}
                      onClick={() => handleOptionChange("back", pattern)}
                      className="focus:outline-none"
                    >
                      {getPatternIcon(
                        pattern,
                        selectedOptions.back === pattern
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sole Color */}
              <div>
                <p className="text-sm font-medium mb-2">Sole</p>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleOptionChange("sole", color)}
                      className="focus:outline-none"
                    >
                      {getColorBox(color, selectedOptions.sole === color)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <p className="text-sm font-medium mb-2">Size</p>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleOptionChange("size", size)}
                      className={`w-8 h-8 border text-xs font-medium ${
                        selectedOptions.size === size
                          ? "bg-gray-600 text-white border-gray-600"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {selectedOptions.size === size ? "✓" : size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      <CartSidebar cart={cart} />
    </div>
  );
};

export default ProductDetail;
