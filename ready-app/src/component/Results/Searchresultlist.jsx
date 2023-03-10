import React, {useState, useHistory} from "react";
import { Link } from "react-router-dom";
import img2 from "../Photos/images/Rectangle 14.png";

const Searchresultlist=(props)=> {
  const AddToCartPage = () => {
    const [cart, setCart] = useState([]);
    const [buttonText, setButtonText] = useState('Add to Cart');
    const history = useHistory();
  
    const handleCart = item => {
      setCart([...cart, item]);
      setButtonText('Added to Cart');
      console.log("Hi")
    };
  
  }
  
  
  return (
    <div className="">
      <div className="flex justify-center align-center my-1">
        <div className="bg-white w-11/12 mx-auto rounded-2xl hover:bg-slate-100">
          <Link to={props.next} className="flex flex-row justify-between cursor-pointer">
            <div className="flex md:flex-row flex-col">
              <img
                src={props.img}
                alt=""
                className="p-5 w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem]"
              />
              <div className="flex-col my-auto mx-5">
                <p className="text-lg font-medium">{props.title}</p>
                <p className="text-lg">{props.dist}</p>
                <p className="text-lg text-purple-500 font-medium">
                  {props.deltime}
                </p>
                <p className="text-lg">{props.rating}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <img
                src={img2}
                alt=""
                className="cursor-pointer rounded-xl m-2"
              />
              <Link to={props.next}><button className="text-white font-medium rounded-xl px-10 py-2 m-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br">
                {props.btn_text}
              </button>
              </Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

}
export default Searchresultlist;
