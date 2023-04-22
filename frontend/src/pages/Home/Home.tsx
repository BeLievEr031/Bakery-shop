import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Category from "./Child/Category";
import Gallery from "./Child/Gallery";
import Testimonial from "./Child/Testimonial";
import ShopByProductType from "./Child/ShopByproductType";
import shopProductByTypeData from "../../localdata/shopproductByTypeData.json"
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
      <div className="flex flex-col">
        {
          shopProductByTypeData.map((item, index) => {
            return <div key={index} className="mt-16 max-sm:mt-2">
              <ShopByProductType productType={item.productType} productArr={item.productArr} />
            </div>
          })
        }
      </div>
      <div className="mt-16 max-sm:mt-5">
        <Testimonial />
      </div>
      <div className="mt-16 max-sm:mt-5">
        <Footer />
      </div>
    </>
  );
}

export default Home;
