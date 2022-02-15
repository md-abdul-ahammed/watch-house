import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Explore from './Pages/Explore/Explore';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Checkout from './Pages/Checkout/Chackout/Checkout';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Cart from './Pages/Cart/Cart';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute exact path='/cart'>
            <Cart></Cart>
          </PrivateRoute>
          <Route exact path='/explore'>
            <Explore></Explore>
          </Route>
          <PrivateRoute exact path='/checkout/:id'>
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/aboutUS'>
            <AboutUs></AboutUs>
          </Route>
          <Route exact path='/contactUs'>
            <ContactUs></ContactUs>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
