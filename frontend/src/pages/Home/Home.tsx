import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Category from "./Child/Category";
import Gallery from "./Child/Gallery";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="mt-16">
        <Category />
      </div>
      <div className="mt-16">
        <Gallery />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
}

export default Home;
