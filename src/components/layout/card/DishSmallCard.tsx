import React from "react";
import './Card.scss';

const DishSmallCard: React.FC<{
  img: string;
  signatureDesktopImage: string,
  title: string;
  detail: string;
  price: number;
  key: string;
}> = (props) => {
  return (
    <div className="data-small-item">
      <img src={props.img} alt="img" className="dish-small-img" srcSet={`${props.signatureDesktopImage} 800w`}></img>
      <div className="data-small-content">
        <h3 className="dish-small-title">{props.title}</h3>
        <p className="dish-small-description">{props.detail}</p>
        <div className="small-wrapper">
          <div className="outter"></div>
          <span className="outter-span">
            <span className="ils">₪</span>
            {props.price}
          </span>
          <div className="outter"></div>
        </div>
      </div>
    </div>
  );
};

export default DishSmallCard;
