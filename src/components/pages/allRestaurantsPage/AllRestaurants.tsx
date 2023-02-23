import Header from "../../header/Header";
import "./AllRestaurants.scss";
import { useState } from "react";
import Footer from "../../footer/Footer";
import RestaurantsGrid from "./RestaurantsGrid";
import React from "react";
import { Link } from "react-router-dom";

const AllRestaurants: React.FC = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="all-restaurants-page">
      <Header />
      <br /> <br />
      <h2>Restaurants</h2>
      <div className="categories-div">
        <Link to="/restaurants/all/1" onClick={() => setFilter("all")} className={`${filter === "all" ? 'all':'filterLink'}`}>All</Link>
        <Link to="/restaurants/new/1" onClick={() => setFilter("new")} className={`${filter === "new" ? 'new':'filterLink'}`}>New</Link>
        <Link to="/restaurants/popular/1" onClick={() => setFilter("popular")} className={`${filter === "popular" ? 'popular':'filterLink'}`}>Most Popular</Link>
        <Link to="/restaurants/open/1" onClick={() => setFilter("open")} className={`${filter === "open" ? 'open':'filterLink'}`}>Open Now</Link>
      </div>
      <br /> 
      <RestaurantsGrid filter={filter} />
    </div>
  );
};

export default AllRestaurants;
