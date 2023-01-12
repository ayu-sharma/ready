import './App.css';
import Signuppage from './component/Signuppage';
import Home from './component/Home';
import Mainnavbar from './component/Mainnavbar';
import Loginpage from './component/Loginpage';
import Registerstore from './component/Registerstore';
import Aboutus from './component/Aboutus';
import Footer from './component/Footer';
import Location from './component/Location';
import Getstarted from './component/Getstarted';
import Storedashboard from './component/Storedashboard';
import Paymentinfo from './component/Paymentinfo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
    <div>
      <Mainnavbar />
      
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
          <Route exact path="/about" element={<Aboutus/>}/>
      </Routes> 
      <Footer/>
    </div>
  </Router>
  );
}

export default App;