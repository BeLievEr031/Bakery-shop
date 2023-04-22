import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import FAQ from "./pages/FAQ/FAQ";
import Wishlist from "./pages/Wishlist/Wishlist";
import Products from "./pages/Products/Products";
import SignUp from "./pages/signup/SignUp";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
