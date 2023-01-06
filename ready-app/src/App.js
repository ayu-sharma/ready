import './App.css';
import Signuppage from './component/Signuppage';
import Home from './component/Home';
import Mainnavbar from './component/Mainnavbar';
import Loginpage from './component/Loginpage';
import Registerstore from './component/Registerstore';
import Aboutus from './component/Aboutus';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
    <div>
      <Mainnavbar />
      {/* <Home /> */}
      {/* <Signuppage /> */}
      {/* <Loginpage /> */}
      <Registerstore />
      {/* <Routes>
          <Route exact path="/about">
            <Aboutus />
          </Route>
          <Route exact path="/sellwithready">
            <Registerstore />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
      </Routes>  */}
    </div>
  </Router>
  );
}

export default App;
