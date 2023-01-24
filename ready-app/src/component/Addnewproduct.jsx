import React from "react";
import { Link } from "react-router-dom";
import Navbarlogoutsell from "./Navbarlogoutsell";
import image from "./Photos/Add Photo.png"

function Addnewproduct() {
  return (
    <div className="min-h-screen">
        
      <Navbarlogoutsell />
      <h1 className="text-white mx-20 my-5 text-2xl">Add New Product</h1>
      <div className="container drop-shadow bg-white mx-auto mt-14 mb-24 align-center w-10/12 md:flow-root rounded-lg flex flex-col  justify-center border-2 border-slate-200">
      <form className="flex justify-center">
          <div className="items-center flex flex-col cursor-pointer my-6">
            <img className="w-[6rem] rounded-full" src={image} alt="" />
            <label className="block">
              <span className="sr-only">Choose File</span>
              <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-blue-100"/>
            </label>
          </div>
        </form>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full">
                <p className="mr-4 text-lg font-semibold py-2">Name</p>
                <input
                className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
                type="text"
                />
            </div>
        </div>
        <div className="md:flex mx-10 py-4">
          <div className="md:flex md:justify-between w-full">
            <p className="mr-4 text-lg font-semibold">Description</p>
            <textarea
              className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
              type="text"
            />
          </div>
        </div>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full">
                <p className="mr-4 text-lg font-semibold py-2">Price</p>
                <input
                className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
                type="text"
                />
            </div>
        </div>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full">
                <p className="mr-4 text-lg font-semibold py-2">Category</p>
                    <select className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg" name="cars" id="cars">
                        <option value="none">None</option>
                        <option value="color">Color</option>
                        <option value="size">Size</option>
                        <option value="type">Type</option>
                        <option value="design">Design</option>
                    </select>
            </div>
        </div>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full opacity-50">
                <p className="mr-4 text-lg font-semibold py-2">Variants *</p>
                <input
                className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
                type="text" disabled
                />
            </div>
        </div>
        <div className="md:flow-root md:mr-10 mb-2 mx-auto">
          <Link to="/orderplaced">
            <button
              className="drop-shadow-xl align-center md:float-right bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br text-white rounded-full px-12 py-2 my-4 mx-4 font-semibold"
              type="submit"
            >
              Add
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Addnewproduct;
