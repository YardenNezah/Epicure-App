import BeigeCard from "../../layout/card/BeigeCard";
import { useSelector } from "react-redux";
import "./AllRestaurants.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { Fragment, useEffect, useState } from "react";
import { fetchRestaurants } from "../../../store/RestaurantDataSlice";
import { fetchNewRestaurants } from "../../../store/newRestaurantsSlice";
import { fetchPopularRestaurants } from "../../../store/popularRestaurantsSlice";
import { fetchOpenRestaurants} from "../../../store/openRestaurantsSlice";

const RestaurantsGrid = ({ filter }: any) => {
  const [pageNumber, setPageNumber] = useState(1);


  const dispatch = useAppDispatch();
  const { restaurants } = useSelector((state: any) => state.restaurants);
  const { newRestaurants } = useSelector((state: any) => state.newRestaurants);
  const { popularRestaurants } = useSelector((state: any) => state.popularRestaurants);
  const { openRestaurants } = useSelector((state: any) => state.openRestaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchNewRestaurants());
    dispatch(fetchPopularRestaurants());
    dispatch(fetchOpenRestaurants());
  }, []);

  let pages = [];
  for (let page = 1; page <= 2; page++) {
    pages.push(
      <Link
        key={page}
        className="page"
        to={`/restaurants/${filter}/${page}`}
        onClick={() => setPageNumber(page)}
      >
        {page}
      </Link>
    );
  }
  return (
    <Fragment>
      {filter === "popular" && (
        <Fragment>
          <div className="restaurants-grid">
            {popularRestaurants.map((item: any) => (
              <Link
                to={`/restaurant/${item.name}`}
                className="to-restaurant-btn"
                key={item._id}
              >
                <BeigeCard
                  key={item.name}
                  title={item.name}
                  detail={item.chef}
                  img={item.mobileImage}
                ></BeigeCard>
              </Link>
            ))}
          </div>
        </Fragment>
      )}

      {filter === "all" && pageNumber === 1 && (
        <Fragment>
          <div className="restaurants-grid">
            {restaurants.map((item: any) => (
              <Link
                to={`/restaurant/${item.name}`}
                className="to-restaurant-btn"
                key={item._id}
              >
                <BeigeCard
                  key={item.name}
                  title={item.name}
                  detail={item.chef}
                  img={item.mobileImage}
                ></BeigeCard>
              </Link>
            ))}
          </div>
          <div className="pagination">{pages}</div>
        </Fragment>
      )}

      {filter === "new" && pageNumber === 1 && (
        <Fragment>
          <div className="restaurants-grid">
            {newRestaurants.map((item: any) => (
              <Link
                to={`/restaurant/${item.name}`}
                className="to-restaurant-btn"
                key={item._id}
              >
                <BeigeCard
                  key={item.name}
                  title={item.name}
                  detail={item.chef}
                  img={item.mobileImage}
                ></BeigeCard>
              </Link>
            ))}
          </div>       
        </Fragment>
        )}

{filter === "open" && pageNumber === 1 && (
        <Fragment>
          <div className="restaurants-grid">
            {openRestaurants.map((item: any) => (
              <Link
                to={`/restaurant/${item.name}`}
                className="to-restaurant-btn"
                key={item._id}
              >
                <BeigeCard
                  key={item.name}
                  title={item.name}
                  detail={item.chef}
                  img={item.mobileImage}
                ></BeigeCard>
              </Link>
            ))}
          </div>       
        </Fragment>
        )}
    </Fragment>
  );
};
export default RestaurantsGrid;
