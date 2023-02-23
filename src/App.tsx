import "./App.scss";
import HomePage from "./components/pages/homePage/HomePage";
import "./fonts/Nimbus-Sans-D-OT-Ultra-Light_32757.ttf";
import { BrowserRouter, Route } from "react-router-dom";
import AllRestaurants from "./components/pages/allRestaurantsPage/AllRestaurants";
import AllChefs from "./components/pages/allChefsPage/AllChefs";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import TermsOfUse from "./components/footer/TermsOfUse";
import ContactUs from "./components/footer/ContactUs";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import RestaurantPage from "./components/pages/restaurantPage/RestaurantPage";
 import ChefPage from "./components/pages/chefPage/ChefPage";
import CartPage from "./components/pages/cartPage/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/Home" exact>
        <HomePage />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/restaurants/:filter/:page" exact>
        <AllRestaurants />
      </Route>
      <Route path="/chefs" exact>
        <AllChefs />
      </Route>
      <Route path="/chefs/:page" exact>
        <AllChefs />
      </Route>
      <Route path="/PrivacyPolicy" exact>
        <PrivacyPolicy />
      </Route>
      <Route path="/TermsOfUse" exact>
        <TermsOfUse />
      </Route>
      <Route path="/ContactUs" exact>
        <ContactUs />
      </Route>
      <Route path="/signin" exact>
        <SignIn />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/chef/:chefName" exact>
        <ChefPage />
      </Route>
      <Route path="/restaurant/:restaurantName" exact>
        <RestaurantPage />
      </Route>  
      <Route path="/cart" exact>
        <CartPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
