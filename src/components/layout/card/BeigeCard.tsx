import React from "react";
import './Card.scss';

const BeigeCard: React.FC<{img: string, title: string, detail: string}>= (props) => {
    return (
            <div className="beige-card"><img src={props.img} alt="img" className="app-icon" /> <h3>{props.title}</h3><p>{props.detail}</p></div>
    );
}
export default BeigeCard;