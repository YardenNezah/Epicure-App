import BeigeCard from "../../layout/card/BeigeCard";
import { useSelector } from "react-redux";
import "./AllRestaurants.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { fetchRestaurants } from "../../../store/RestaurantDataSlice";

const RestaurantsGrid = ({ filter }: any) => {
  const dispatch = useAppDispatch();
  const { restaurants } = useSelector((state: any) => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
  },[]);

  const passFilter = (item: any) => {
    switch (filter) {
      case "all":
        return true;
      case "new":
        if (item.isNewRestaurant) return true;
        else return false;
      case "popular":
        if (item.isPopular) return true;
        else return false;
      case "open":
        const opening = item.openingHour.split(":")[0] * 1;
        const closing = item.closingHour.split(":")[0] * 1;
        const date = new Date();
        const now = date.getHours();
        if (now >= opening && now <= closing) return true;
        else return false;
      default:
        return true;
    }
  };
  return (
    <div className="restaurants-grid">
      {restaurants.map((item: any) => {
        if (passFilter(item))
          return (
            <Link to={`/restaurant/${item.name}`} className="to-restaurant-btn">
              <BeigeCard
                key={item.name}
                title={item.name}
                detail={item.chef}
                img={item.mobileImage}
              ></BeigeCard>
            </Link>
          );
       })}
    </div>
  );
};
export default RestaurantsGrid;
