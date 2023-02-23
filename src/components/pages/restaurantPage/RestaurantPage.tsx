import clock from "../../../assets/clock-icon.svg";
import DishSmallCard from "../../layout/card/DishSmallCard";
import "./RestaurantPage.scss";
import DishPage from "../dishPage/DishPage";
import { Link, useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import { useEffect, Fragment, useState } from "react";
import { fetchRestaurants } from "../../../store/RestaurantDataSlice";
import { fetchDishes } from "../../../store/dishDataSlice";

const RestaurantPage = ({ filter }: any) => {
  const [openDishCard, setOpenDishCard] = useState(false);
  const [dishName, setDishName] = useState("");

  const dispatch = useAppDispatch();
  const { restaurants } = useSelector((state: any) => state.restaurants);
  const { dishes } = useSelector((state: any) => state.dishes);

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchDishes());
  }, []);

  const openDishCardHandler = (dish: string) => {
    setOpenDishCard(true);
    setDishName(dish);
  };

  const params: any = useParams();

  const restaurantDetails = restaurants.filter(
    (item: any) => item.name === params.restaurantName
  );

  const restaurantDishes = dishes.filter(
    (item: any) => item.restaurant === params.restaurantName
  );

  const mealsTypes: string[] = ["all", "Breakfast", "Lunch", "Dinner"];
  const [filterType, setFilterType] = useState("all");

  const passFilter = (item: any) => {
    switch (filterType) {
      case "all":
        return true;
      case "Breakfast":
        if (item.dishType === "Breakfast") {
          return true;
        } else return false;
      case "Lunch":
        if (item.dishType === "Lunch") {
          return true;
        } else return false;
      case "Dinner":
        if (item.dishType === "Dinner") {
          return true;
        } else return false;
      default:
        return true;
    }
  };
  const filteredArr = restaurantDishes.filter((item: any) => passFilter(item));

  const opening = restaurantDetails[0].openingHour.split(":")[0] * 1;
  const closing = restaurantDetails[0].closingHour.split(":")[0] * 1;
  const now = new Date().getHours();
  const ifOpen: boolean = now >= opening && now <= closing;
  return (
    <div className="restaurant-page">
      <Header />
      {openDishCard && (
        <Fragment>
          <button
            className="dish-container"
            onClick={() => setOpenDishCard(false)}
          ></button>
          <button
            className="close-dish-page"
            onClick={() => setOpenDishCard(false)}
          >
            X
          </button>
          <br />
          <DishPage dish={dishName}></DishPage>
        </Fragment>
      )}
      {!openDishCard && (
        <div className="restaurant-page-container">
          <img
            src={restaurantDetails[0].desktopImage}
            alt="restaurant"
            className="restaurant-page-img"
            srcSet={`${restaurantDetails[0].bigImage} 800w`}
          ></img>
          <h1>{params.restaurantName}</h1>
          <h2>{restaurantDetails[0].chef}</h2>
          {ifOpen && (
            <div>
              <img src={clock} alt="clock"></img> <span>Open now</span>
            </div>
          )}
          <nav className="categories-div">
            {mealsTypes.map((typeName) => (
                <Link to="/restaurants/all/1" onClick={() => setFilterType(typeName)} className={`type-meal-link ${filter === "all" ? 'all':'filterLink'}`} key={typeName}>All</Link>
            ))}
          </nav>

          <div className="meal-by-type">
            {mealsTypes.map((type: any) => (
                <div className="dishes-container" key={type}>
                  {filteredArr.map(
                    (dish: any) =>
                      type === dish.dishType && (
                          <button
                            className="to-dish-btn"
                            onClick={() => openDishCardHandler(dish.name)} key={dish._id}
                          >
                            <div className="restaurant-item">
                              <DishSmallCard
                                img={dish.mobileImage}
                                signatureDesktopImage={dish.desktopImage}
                                title={dish.name}
                                detail={dish.description}
                                price={dish.price}
                                key={dish.key}
                              ></DishSmallCard>
                            </div>
                          </button>
                      )
                  )}
                </div>
            ))}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;
