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
      
      {/* <Home /> */}
      {/* <Signuppage /> */}
      {/* <Loginpage /> */}
      {/* <Registerstore /> */}
      {/* <Aboutus/> */}
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/get-started" element={<Getstarted/>}/>
          <Route exact path="/store-dashboard" element={<Storedashboard/>}/>
          <Route exact path="/seller-signup" element={<Signuppage/>}/>
          <Route exact path="/buyer-signup" element={<Signuppage/>}/>
          <Route exact path="/register-store" element={<Registerstore/>}/>
          <Route exact path="/about" element={<Aboutus/>}/>
          <Route exact path="/login-page" element={<Loginpage/>}/>
          <Route exact path="/location" element={<Location/>}/>
          <Route exact path="/payment-info" element={<Paymentinfo/>}/>
      </Routes> 
      <Footer/>
    </div>
  </Router>
  );
}

export default App;