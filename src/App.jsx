import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Index from "./pages/Index";
import Footer from "./layouts/Footer";
import Category from "./Components/Category";
import Details from "./Components/Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Index />} />
        <Route index path="/category/:name" element={<Category />} />
        <Route index path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
