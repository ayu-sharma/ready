import React from "react";
import Navbarlogoutbuy from "../Navbarlogoutbuy";
import Searchresultlist from "./Searchresultlist";
import data from '../../Data/pumaproducts'

function Searchresult() {
  return (
    <div className="mb-24">
      <Navbarlogoutbuy />
      <div className="bg-purple-50 w-11/12 mx-auto flex items-center rounded-full px-10 py-3 mb-4">
        <div className="flex w-full justify-evenly">
          <div className="font-light text-lg text-[#8f0fff] px-10 py-2 mx-2">
            Results
          </div>
          <input
            className="bg-white w-10/12 rounded-full px-8 py-2 shadow-inner border-2 border-purple-200"
            type="text"
            id=""
            name=""
          />
        </div>
      </div>
      {
        data.products.map(product => (
            <Searchresultlist img={product.image} title={product.name} dist={product.price} deltime='Delivery in 20 min' rating='⭐⭐⭐⭐ (1098)' btn_text='Add To Cart'/>   
        ))
      }
    </div>
  );
}

export default Searchresult;
