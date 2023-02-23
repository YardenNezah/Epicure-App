import { Link, useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import ChefCard from "../../layout/card/ChefCard";
import "../homePage/HomePage.scss";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { fetchChefs } from "../../../store/chefDataSlice";
import { fetchRestaurants } from "../../../store/RestaurantDataSlice";

const ChefPage = () => {
  const dispatch = useAppDispatch();
  const { chefs } = useSelector((state: any) => state.chefs);
  const { restaurants } = useSelector((state: any) => state.restaurants);

  useEffect(() => {
    dispatch(fetchChefs());
    dispatch(fetchRestaurants());
  },[]);

  const params: any = useParams();
  const chefDetails = chefs.filter(
    (chef: any) => chef.chefName === params.chefName
  );
  const chefRestaurants = restaurants.filter(
    (restaurant: any) => restaurant.chef === params.chefName
  );
  return (
    <Fragment>
      <Header />
      <h1>{params.chefName}</h1>
      <img src={chefDetails[0].chefImage} alt="chef" className="chef-img" />
      <p className="chef-page-description">{chefDetails[0].chefDescription}</p>
      <h2>{params.chefName}'s Restaurants:</h2>
      <div className="chef-restaurants-container">
        {chefRestaurants.map((restaurant: any) => {
          return (
            <Link
              to={`/restaurant/${restaurant.name}`}
              className="to-restaurant-btn" key={restaurant.name}
            >
              <ChefCard
                key={restaurant._id}
                title={restaurant.name}
                detail=""
                restaurantImg={restaurant.mobileImage}
                restaurantName={restaurant.name}
                img=""
              />
            </Link>
          );
        })}
      </div>
      <Footer />
    </Fragment>
  );
};

export default ChefPage;
