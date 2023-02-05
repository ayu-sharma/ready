import React from "react";
import Navbarlogoutbuy from "./Navbarlogoutbuy";
import Searchresultlist from "./Searchresultlist";
import img1 from "./Photos/images/Rectangle 11.png";
import img2 from "./Photos/images/Rectangle 11 (1).png";

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
        <Searchresultlist img={img1} title='Tshirt' dist='1 km away' deltime='Delivery in 20 min' rating='⭐⭐⭐⭐⭐ (1423)' btn_text='Add To Cart'/>
        <Searchresultlist img={img2} title='This Shop - Area B' dist='3 km away' deltime='Delivery in 1 hr' rating='⭐⭐⭐⭐ (300)' btn_text='Add To Cart'/>
        <Searchresultlist img={img1} title='That Shop - Street 12' dist='1.5 km away' deltime='Delivery in 40min' rating='⭐⭐⭐⭐ (14)' btn_text='Add To Cart'/>
        <Searchresultlist img={img2} title='This Store - A Road' dist='7 km away' deltime='Delivery in 2 hrs' rating='⭐⭐⭐ (423)' btn_text='Add To Cart'/>
        <Searchresultlist img={img1} title='That Store - Area A' dist='600m away' deltime='Delivery in 10min' rating='⭐⭐⭐⭐ (14)' btn_text='Add To Cart'/>
      {/* <div className="flex justify-center align-center">
        <div className="bg-white w-11/12 mx-auto rounded-2xl">
          <div className="flex flex-row justify-between">
            <div className="flex">
                <img src={img1} alt="" className="p-5 w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]" />
                <div className="flex-col my-auto mx-5">
                    <p className="text-lg font-medium">This Shop - Area A</p>
                    <p className="text-lg">1 km away </p>
                    <p className="text-lg text-purple-500 font-medium">
                        Delivery in 20min
                    </p>
                    <p className="text-lg">⭐⭐⭐⭐⭐ (1423)</p>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <img src={img2} alt="" className="cursor-pointer rounded-xl m-2" />
              <button className="text-white font-medium rounded-xl px-10 py-2 m-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br">See Products</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Searchresult;
