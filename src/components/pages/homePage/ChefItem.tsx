import { Fragment } from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const ChefItem = ({ chef, restaurants }:any) => {
  return (
    <Fragment>
      {chef.map((chefDetails:any) => {
        if (chefDetails.chefOfTheWeek === true) {
          return (
            <div className="chef-container" key={chefDetails._id}>
              <div className="chef-img">
                <img
                  src={chefDetails.chefImage}
                  alt="chef"
                  className="chef-img"
                ></img>
                <h1>{chefDetails.chefName}</h1>
              </div>
              <p className="chef-description">{chefDetails.chefDescription}</p>
            </div>
          );
        }
      })}
      <br />
      <div className="chefs-restaurants">
        <p className="chef-left-title">yossi’s restaurants :</p>
        <div className="chef-restaurants-container">
          {restaurants.map((restaurant:any) => {
            if (restaurant.chef === "Yossi Shitrit") {
              return (
                <Link
                  to={`/restaurant/${restaurant.name}`}
                  className="to-restaurant" key={restaurant._id}
                >
                  <div className="chef-restaurant-item">
                    <img
                      src={restaurant.mobileImage}
                      alt="img"
                      className="chef-restaurant-img"
                    />{" "}
                    <h3>{restaurant.name}</h3>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ChefItem;
