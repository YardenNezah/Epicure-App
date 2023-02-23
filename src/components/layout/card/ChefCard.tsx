import React from "react";
import BeigeCard from "./BeigeCard";
import "./Card.scss";

const ChefCard: React.FC<{
  img: string;
  title: string;
  detail: string;
  restaurantImg: string;
  restaurantName: string;
}> = (props) => {
  return (
        <BeigeCard
          img={props.restaurantImg}
          title={props.restaurantName}
          detail={""}
        ></BeigeCard>
  );
};

export default ChefCard;
