import React from "react";
import FiltersSidebar from "./components/FilterSidebar";
import ProductGrid from "./components/ProductGrid";
import CartSidebar from "./components/CartSidebar";
import ProductDetail from "./components/ProductDetail";

import { useCart } from "../../../contexts/CartContext";
import { useFilters } from "../../../contexts/FilterContext";
import { useProduct } from "../../../contexts/ProductContext";

import shoe from "../../../assets/shoe.jpg";
import shoe2 from "../../../assets/shoe2.png";

const ShoeStore = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { filters, setFilters } = useFilters();

  const {
    products,
    setProducts,
    selectedProduct,
    setSelectedProduct,
    sortBy,
    setSortBy,
  } = useProduct();

  // Initialize products only once if empty
  React.useEffect(() => {
    if (!products.length) {
      setProducts([
        {
          id: 1,
          name: "KSL 01",
          price: 2000,
          rating: 3.5,
          reviews: 80,
          brand: "KICKSUP",
          image: shoe,
          offer: "Get an exclusive 20% off shopping with HDFC bank",
        },
        {
          id: 2,
          name: "KSW 01",
          price: 2500,
          rating: 2.5,
          reviews: 45,
          brand: "KICKSUP",
          image: shoe2,
        },
        {
          id: 3,
          name: "Royal S 01",
          price: 6000,
          rating: 4.5,
          reviews: 120,
          brand: "KICKSUP",
          image: shoe,
        },
      ]);
    }
  }, [products, setProducts]);

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
        cart={cart}
      />
    );
  }

  return (
    <div className="flex gap-8 p-6 bg-gray-50">
      <FiltersSidebar selectedFilters={filters} onFiltersChange={setFilters} />
      <ProductGrid
        products={products}
        onProductClick={setSelectedProduct}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onRemove={removeFromCart}
      />
      <CartSidebar cart={cart} onRemove={removeFromCart} />
    </div>
  );
};

export default ShoeStore;
