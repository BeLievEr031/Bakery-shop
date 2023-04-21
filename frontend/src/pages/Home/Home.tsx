import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Category from "./Child/Category";
import Gallery from "./Child/Gallery";
import Testimonial from "./Child/Testimonial";
import ShopByProductType from "./Child/ShopByproductType";
import shopProductByTypeData from "../../localdata/shopproductByTypeData.json"

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
            return <div className="mt-16">
              <ShopByProductType productType={item.productType} productArr={item.productArr} />
            </div>
          })
        }
      </div>
      <div className="mt-16">
        <Testimonial />
      </div>
    </>
  );
}

export default Home;
