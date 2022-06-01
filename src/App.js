
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import Home from './Componets/Home';
import './App.css';
import Login from './Componets/Login';
import Forgetpassword from './Componets/Forgetpassword';
import Signup from './Componets/Signup';
import MyAccounts from './Componets/MyAccounts';
import Order from './Componets/Oder';
import Contactus from './Componets/Contactus';
import Services from './Componets/Services';
import ShoppingCard from './Componets/ShoppingCard';
import Shop from './Componets/Shop';
import Checkout from './Componets/Checkout';
import ShippingCartDetails from './Componets/ShippingCartDetails';
import Aboutus from './Componets/Aboutus';
import OrderComplete from './Componets/OrderComplete';
import Hire from './Componets/Hire';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <>
    
    <Router>
    <div>
      
<Navbar/>

      <Switch>


       <Route exact path='/' component={Home}></Route>
 <Route path='/about' component={Aboutus}></Route>
 <Route path='/servies' component={Services}></Route>
 <Route path='/hire' component={Hire}></Route>
 <Route path='/contactus' component={Contactus}></Route>
 <Route path='/login' component={Login}></Route>
 <Route path='/shop' component={Shop}></Route>
 <Route path="/shoppingcard">{<ShoppingCard/>}</Route>
 <Route path='/signup' component={Signup}></Route>

      </Switch>
    </div>
    <Footer/>
  </Router>
    </>
  )
}

export default App



  {/* <ShippingCartDetails/> */}
      {/* <Checkout/> */}
      {/* <OrderComplete/> */}
      {/* <Forgetpassword/> */}
      {/* <MyAccounts/> */}
      {/* <Order/> */}