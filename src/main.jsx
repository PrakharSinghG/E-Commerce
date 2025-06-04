import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TheJourney from "./components/Pages/TheJourney/TheJourney.jsx";
import Contact from "./components/Pages/Contact/Contact.jsx";
import TeamPage from "./components/Pages/Team/TeamPage.jsx";
import ShoeStore from "./components/Pages/Store/ShoeStore.jsx";

// Import context providers
import { CartProvider } from "./contexts/CartContext";
import { FilterProvider } from "./contexts/FilterContext";
import { ProductProvider } from "./contexts/ProductContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <h1>Home</h1> },
      { path: "/theJourney", element: <TheJourney /> },
      { path: "/team", element: <TeamPage /> },
      { path: "/store", element: <ShoeStore /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <FilterProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </FilterProvider>
    </CartProvider>
  </StrictMode>
);
