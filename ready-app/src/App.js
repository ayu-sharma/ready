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
import Apparelstoresresult from './component/Apparelstoresresult';
import Seeproducts from './component/Seeproducts'
import Product from './component/Product';
import Checkout from './component/Checkout';
import Orderplaced from './component/Orderplaced';
import Addnewproduct from './component/Addnewproduct';
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
          <Route exact path="/all-products" element={<Seeproducts/>}/>
          <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/checkout" element= {<Checkout/>}/>
          <Route exact path="/orderplaced" element= {<Orderplaced/>}/>
          <Route exact path="/continueshop" element= {<Ecomhome/>}/>
          <Route exact path="/add-product" element= {<Addnewproduct/>}/>
      </Routes> 
      <Footer/>
    </div>
  </Router>
  );
}

export default App;