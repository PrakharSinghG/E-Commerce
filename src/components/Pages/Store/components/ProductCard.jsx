import React from "react";

const ProductCard = ({ product, onClick }) => {
  // Add safety check for undefined product
  if (!product) {
    return null;
  }

  return (
    <div
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onClick(product)}
    >
      {/* Product Image */}
      <div className="bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden mb-4 w-full h-46">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">Rs. {product.price}/-</p>
    </div>
  );
};

export default ProductCard;
