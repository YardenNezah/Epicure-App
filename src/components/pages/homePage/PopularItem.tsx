import { Link } from "react-router-dom";

const PopularItem = ({restaurant}:any) => {
    return (
      <Link
        to={`/restaurant/${restaurant.name}`}
        className="to-restaurant-btn">
        <div className="data-item popular-item">
          <img
            src={restaurant.mobileImage}
            alt="img"
            className="restaurant-img"
            srcSet={`${restaurant.desktopImage} 800w`}
          ></img>
          <div className="restaurant-content">
            <h2 className="restaurant-name">{restaurant.name}</h2>
            <p className="chef-name">{restaurant.chef}</p>
          </div>
        </div>
      </Link>
    );
  };

  export default PopularItem;