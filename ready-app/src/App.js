import './App.css';
import Signuppage from './component/Signuppage';
import Home from './component/Home';
import Loginpage from './component/Loginpage';
import Registerstore from './component/Registerstore';
import Aboutus from './component/Aboutus';
import Footer from './component/Footer';
import Location from './component/Location';
import Getstarted from './component/Getstarted';
import Storedashboard from './component/Storedashboard';
import Paymentinfo from './component/Paymentinfo';
import Listedproducts from './component/Listedproducts';
import Analytics from './component/Analytics';
import Ecomhome from './component/Ecomhome';
import Cart from './component/Cart';
import Wishlist from './component/Wishlist';
import Profile from './component/Profile';
import Apparelstoresresult from './component/Results/Apparelstoresresult';
import Seeproducts from './component/Seeproducts'
import Product from './component/Product';
import Checkout from './component/Checkout';
import Orderplaced from './component/Orderplaced';
import Addnewproduct from './component/Addnewproduct';
import Pumaresult from './component/Results/Pumaresult'
import Cromaresult from './component/Results/Cromaresult'
import Hnmresult from './component/Results/Hnmresults'
import Nikeresult from './component/Results/Nikeresult'
import Iphone13 from './component/Products/Iphone13'
import Iphone14pro from './component/Products/Iphone14Pro'
import Macbookair from './component/Products/MacbookAir'
import Macbookpro from './component/Products/MacbookPro'
import Aiprodspro from './component/Products/AirpodsPro'
import Aiprodsmax from './component/Products/AirpodsMax'
import Oneplusz2 from './component/Products/OneplusBudsZ2'
import Oneplus10 from './component/Products/Oneplus10'
import Oneplusnord from './component/Products/OneplusNord'
import Oneplusbudspro from './component/Products/OneplusBudsPro'
import Pumaaero from './component/Products/PumaAero13'
import Pumarunner from './component/Products/PumaRunners'
import Pumasports from './component/Products/PumaSportShoes'
import Pumatrack from './component/Products/PumaTrack'
import Hnmblackt from './component/Products/HnmBlackT'
import Hnmblacksweat from './component/Products/HnmBlackSweat'
import Hnmsneakers from './component/Products/HnmSneakers'
import Hnmshirt from './component/Products/HnmShirt'
import Hnmboots from './component/Products/HnmBoots'
import Nikecap from './component/Products/NikeCap'
import Nikesneak from './component/Products/NikeSneakers'
import Nikehigh from './component/Products/NikeHightops'
import Nikerun from './component/Products/NikeRunning'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
    <div>
      {/* <Navbarlogin /> */}
      {/* <Navbarlogoutsell /> */}
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/seller-signup" element={<Signuppage cta="You are one step closer to setting up your online store! Sign up and get started." button="/get-started" link="/seller-login"/>}/>
          <Route exact path="/buyer-signup" element={<Signuppage cta="Sign up and start shopping from your favourite stores in town." button="/location" link="/buyer-login"/>}/>
          <Route exact path="/buyer-login" element={<Loginpage cta="Sign in and continue your shopping." button="/home" link="/buyer-signup"/>}/>
          <Route exact path="/seller-login" element={<Loginpage cta="Sign in and start growing your online store." button="/store-dashboard" link="/seller-signup"/>}/>
          <Route exact path="/get-started" element={<Getstarted/>}/>
          <Route exact path="/register-store" element={<Registerstore/>}/>
          <Route exact path="/location" element={<Location/>}/>
          <Route exact path="/store-dashboard" element={<Storedashboard/>}/>
          <Route exact path="/payment-info" element={<Paymentinfo/>}/>
          <Route exact path="/products" element={<Listedproducts/>}/>
          <Route exact path="/analytics" element={<Analytics/>}/>
          <Route exact path="/about" element={<Aboutus/>}/>
          <Route exact path="/home" element={<Ecomhome/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/wishlist" element={<Wishlist/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/apparel-stores" element={<Apparelstoresresult/>}/>
          <Route exact path="/puma-store" element={<Pumaresult/>}/>
          <Route exact path="/croma-store" element={<Cromaresult/>}/>
          <Route exact path="/hnm-store" element={<Hnmresult/>}/>
          <Route exact path="/nike-store" element={<Nikeresult/>}/>
          <Route exact path="/all-products" element={<Seeproducts/>}/>
          <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/checkout" element= {<Checkout/>}/>
          <Route exact path="/orderplaced" element= {<Orderplaced/>}/>
          <Route exact path="/continueshop" element= {<Ecomhome/>}/>
          <Route exact path="/add-product" element= {<Addnewproduct/>}/>
          <Route exact path="apple-iphone-13" element= {<Iphone13/>}/>
          <Route exact path="apple-iphone-14-pro" element= {<Iphone14pro/>}/>
          <Route exact path="apple-macbook-air-m2" element= {<Macbookair/>}/>
          <Route exact path="apple-macbook-pro-m2" element= {<Macbookpro/>}/>
          <Route exact path="apple-airpods-pro" element= {<Aiprodspro/>}/>
          <Route exact path="apple-airpods-max" element= {<Aiprodsmax/>}/>
          <Route exact path="oneplus-buds-z3" element= {<Oneplusz2/>}/>
          <Route exact path="oneplus-10" element= {<Oneplus10/>}/>
          <Route exact path="oneplus-buds-pro" element= {<Oneplusbudspro/>}/>
          <Route exact path="oneplus-nord-ce-2-lite" element= {<Oneplusnord/>}/>
          <Route exact path="puma-aero-13s" element= {<Pumaaero/>}/>
          <Route exact path="puma-runners" element= {<Pumarunner/>}/>
          <Route exact path="puma-sports-shoes" element= {<Pumasports/>}/>
          <Route exact path="puma-track" element= {<Pumatrack/>}/>
          <Route exact path="hnm-black-tshirt" element= {<Hnmblackt/>}/>
          <Route exact path="hnm-black-sweatshirt" element= {<Hnmblacksweat/>}/>
          <Route exact path="hnm-sneakers" element= {<Hnmsneakers/>}/>
          <Route exact path="hnm-shirt" element= {<Hnmshirt/>}/>
          <Route exact path="hnm-boots" element= {<Hnmboots/>}/>
          <Route exact path="nike-black-cap" element= {<Nikecap/>}/>
          <Route exact path="nike-sneakers" element= {<Nikesneak/>}/>
          <Route exact path="nike-hightops" element= {<Nikehigh/>}/>
          <Route exact path="nike-running-shoes" element= {<Nikerun/>}/>
      </Routes> 
      <Footer/>
    </div>
  </Router>
  );
}

export default App;