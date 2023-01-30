import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Navbarlogoutsell from "./Navbarlogoutsell";

function Registerstore(){
  const [image, setImage] = useState();
  const [input, setInput] = useState({
    storename: "",
    ownername: "",
    gst: "",
    addressone: "",
    addresstwo: "",
    cat:"none",
    other: ""
    });
    const[inputEnabled, setinputEnabled] = useState(false)

    useEffect(() => {
      setinputEnabled(input.cat !== 'other');
    }, [input]);

let name, value;
    const handle = (e) => {
      console.log(e)
      name = e.target.name
      value = e.target.value
      
      setInput({...input, [name]:value})
    }
  

  function changeimg(e) {
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
            <label className="block">
              <span className="sr-only">Choose File</span>
              <input type="file" onChange={changeimg} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-blue-100"/>
            </label>
          </div>
        </form>
        <form className="md:flex md:flex-col w-full">
        <div className="md:flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full">
                <p className="mr-4 text-lg font-semibold py-2">Store Name</p>
                <input
                className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
                type="text" required name="storename" autoComplete="off"
                onChange={handle} value={input.storename}
                />
            </div>
        </div>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full">
                <p className="mr-4 text-lg font-semibold py-2">Owner Name</p>
                <input
                className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
                type="text" required name="ownername" autoComplete="off"
                onChange={handle} value={input.ownername}
                />
            </div>
        </div>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full">
                <p className="mr-4 text-lg font-semibold py-2">GSTIN</p>
                <input
                className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
                type="text" required name="gst"
                onChange={handle} value={input.gst}
                />
            </div>
        </div>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full">
                <p className="mr-4 text-lg font-semibold py-2">Address Line 1</p>
                <input
                className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
                type="text" required name="addressone"
                onChange={handle} value={input.addressone}
                />
            </div>
        </div>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full">
                <p className="mr-4 text-lg font-semibold py-2">Address Line 2</p>
                <input
                className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
                type="text" required name="addresstwo"
                onChange={handle} value={input.addresstwo}
                />
            </div>
        </div>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full">
                <p className="mr-4 text-lg font-semibold py-2">Category</p>
                    <select className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg" name="cat" onChange={handle} id="cars" value={input.cat}>
                        <option value="none">None</option>
                        <option value="grocery">Grocery</option>
                        <option value="apparel">Apparel</option>
                        <option value="hardware-electronics">Hardware and Electronics</option>
                        <option value="books">Books</option>
                        <option value="other">Other</option>
                    </select>
            </div>
        </div>
        <div className="flex mx-10 py-4">
            <div className="md:flex md:justify-between w-full opacity-50">
                <p className="mr-4 text-lg font-semibold py-2">Other *</p>
                <input
                className="bg-gray-200 w-full md:w-10/12 rounded-lg shadow-inner px-3 py-2 text-lg"
                type="text" name="other" value={input.other} onChange={handle} disabled={inputEnabled}
                />
            </div>
        </div>
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
