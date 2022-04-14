import Card from "../../layout/card/Card";
import "./HomePage.scss";
import Search from "../../layout/search/Search";
import MobileNav from "./mobile-nav/MobileNav";
import About from "./about/About";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import PopularRestaurant from "./PopularRestaurant";
import SignatureDish from "./SignatureDish";
import Icons from "./Icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ChefItem from "./ChefItem";
import { useEffect } from "react";
import { fetchChefs } from "../../../store/chefDataSlice";
import { fetchDishes } from "../../../store/dishDataSlice";
import {fetchRestaurants} from "../../../store/RestaurantDataSlice";
import { useSelector } from "react-redux";
import { useAppDispatch} from "../../../store/store";

const HomePage = () => {
  const dispatch= useAppDispatch();
  const {restaurants}= useSelector((state:any)=> state.restaurants);
  const {dishes}= useSelector((state:any)=> state.dishes);
  const {chefs}= useSelector((state:any)=> state.chefs);

  useEffect(() => {
    dispatch(fetchRestaurants()) 
    dispatch(fetchChefs()) 
    dispatch(fetchDishes()) 
    },[]);


  return (
    <Fragment>
      <Header />
      <div className="card-bg">
        <Card>
          <p className="epicure-title">
            Epicure works with the top chef restaurants in Tel Aviv
          </p>
          <Search />
        </Card>
      </div>
      <MobileNav />
      <div className="data-section">
        <p className="sub-title">THE POPULAR RESTAURANTS IN EPICURE : </p>
        <PopularRestaurant data={restaurants}/>
        <Link to={"AllRestaurants"} className="all-restaurants-desktop-btn">
          All Restaurants {">>"}{" "}
        </Link>
        <p className="sub-title">SIGNATURE DISH OF :</p>
        <SignatureDish dishes={dishes}/>
        <Icons />
      </div>
      <p className="sub-title">CHEF OF THE WEEK :</p>
      <ChefItem chef={chefs} restaurants={restaurants}/>
      <About />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
