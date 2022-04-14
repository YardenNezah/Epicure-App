import clock from "../../../assets/clock-icon.svg";
import DishSmallCard from "../../layout/card/DishSmallCard";
import "./RestaurantPage.scss";
import DishPage from "../dishPage/DishPage";
import { useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import { useEffect, Fragment, useState } from "react";
import { fetchRestaurants } from "../../../store/RestaurantDataSlice";
import { fetchDishes } from "../../../store/dishDataSlice";

const RestaurantPage = () => {
  const [openDishCard, setOpenDishCard] = useState(false);
  const [dishName, setDishName] = useState("");

  const dispatch = useAppDispatch();
  const { restaurants } = useSelector((state: any) => state.restaurants);
  const { dishes } = useSelector((state: any) => state.dishes);

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchDishes());
  },[]);

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

  const mealsTypes: string[] = ["Breakfast", "Lunch", "Dinner"];

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
          ></button>{" "}
          <button
            className="close-dish-page"
            onClick={() => setOpenDishCard(false)}
          >
            X
          </button>{" "}
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
            {mealsTypes.map((type) => (
              <a href={`#${type}`} className="type-meal-link">
                {type}
              </a>
            ))}
          </nav>
          <div className="meal-by-type">
            {mealsTypes.map((type) => {
              return (
                <Fragment>
                  <div className="type-container" id={type}>
                    <h2>{type}</h2>
                    <div className="type-line"></div>
                  </div>
                  <div className="restaurants-container">
                    {restaurantDishes.map((dish: any) => {
                      if (dish.dishType === mealsTypes[0])
                        return (
                          <button
                            className="to-dish-btn"
                            onClick={() => openDishCardHandler(dish.name)}
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
                        );
                    })}
                  </div>
                </Fragment>
              );
            })}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;
