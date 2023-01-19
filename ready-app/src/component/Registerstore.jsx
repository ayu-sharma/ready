import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbarlogoutsell from "./Navbarlogoutsell";
import uploading from "./Photos/uploading.png";

function Registerstore() {
  const [image, setImage] = useState();

  function changeimg(e) {
    // console.log(e.target.files)
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <Navbarlogoutsell />

      <h1 className="text-white mx-20 text-2xl">Register your store</h1>
      {/* <div className='drop-shadow-2xl mb-44 bg-white md:mx-20 py-8 mt-10 mx-10 rounded-xl flex flex-col justify-center'> */}
      <div className="drop-shadow-2xl mb-44 bg-white md:mx-20 py-8 mt-10 mx-10 rounded-xl flex flex-col items-center">
        <form className="">
          <div className="items-center flex flex-col cursor-pointer mb-4">
            <img className="w-[6rem] rounded-full" src={image} alt="" />
            <label class="block">
              <span class="sr-only">Choose File</span>
              <input type="file" onChange={changeimg} class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-blue-100"/>
            </label>
          </div>
        </form>
        <form className="md:flex md:flex-col w-full">
          <label className="flex flex-col px-2 mx-5">
            <div className="flex flex-col">
              <div className="grid grid-row">
                <h4 className="">Store Name</h4>
                <input
                  className="my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full"
                  type="text"
                  name="store_name"
                />
              </div>
              <div className="grid grid-row">
                <h4 className="">Owner Name</h4>
                <input
                  className="my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full"
                  type="text"
                  name="store_name"
                />
              </div>
              <div className="grid grid-row">
                <h4 className="">GSTIN</h4>
                <input
                  className="my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full"
                  type="text"
                  name="store_name"
                />
              </div>
              <div className="grid grid-row">
                <h4 className="">Address Line 1</h4>
                <input
                  className="my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full"
                  type="text"
                  name="store_name"
                />
              </div>
              <div className="grid grid-row">
                <h4 className="">Address Line 2</h4>
                <input
                  className="my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full"
                  type="text"
                  name="store_name"
                />
              </div>
              <div className="grid grid-row">
                <h4 className="">Category</h4>
                <input
                  className=" my-3 md:my-5 px-2 py-2 bg-[#D9D9D9] text-black shadow-inner rounded text-l w-full"
                  type="text"
                  name="store_name"
                />
              </div>
            </div>
            <div></div>
          </label>
        </form>

        <Link to="/store-dashboard">
          <button
            className="text-white font-semibold rounded-full px-12 py-2 mx-auto my-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br ease-in-out transition duration-200"
            type="submit"
          >
            Register Now
          </button>
        </Link>
      </div>
    </>
  );
}
export default Registerstore;
