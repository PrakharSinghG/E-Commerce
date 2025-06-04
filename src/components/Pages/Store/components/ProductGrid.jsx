import React from "react";
import { useProduct } from "../../../../contexts/ProductContext";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { sortedProducts, sortBy, setSortBy, onProductClick } = useProduct();

  if (!sortedProducts || sortedProducts.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort by</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onProductClick}
          />
        ))}
        {sortedProducts.map((product) => (
          <ProductCard 
            key={`duplicate-${product.id}`} 
            product={product} 
            onClick={onProductClick} 
          />
        ))}

      </div>
    </div>
  );
};

export default ProductGrid;
