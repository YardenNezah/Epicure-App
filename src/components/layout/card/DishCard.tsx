import React from "react";
import './Card.scss';

const DishCard: React.FC<{
  img: string;
  signatureDesktopImage: string,
  title: string;
  detail: string;
  icon: string;
  price: number;
  key: string; 
}> = (props) => {
  return (
    <div className="data-item" id="data">
      <img src={props.img} alt="img" className="dish-img" srcSet={`${props.signatureDesktopImage} 800w`}></img>
      <div className="data-content">
        <h3 className="dish-title">{props.title}</h3>
        <p className="dish-description">{props.detail}</p>
        <img src={props.icon} alt="img" className="dish-icon"></img> <br></br>
        <div className="wrapper">
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

export default DishCard;
