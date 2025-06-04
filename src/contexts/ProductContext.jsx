import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // Your product list
  const [sortBy, setSortBy] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sort products based on sortBy
  const sortedProducts = useMemo(() => {
    let sorted = [...products];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }
    return sorted;
  }, [products, sortBy]);

  // Handler when user clicks a product
  const onProductClick = useCallback((product) => {
    setSelectedProduct(product);
    // Add any other logic here, like opening a modal
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        sortedProducts,
        sortBy,
        setSortBy,
        selectedProduct,
        setSelectedProduct,
        onProductClick,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
