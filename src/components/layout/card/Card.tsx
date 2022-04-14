import { Fragment } from "react"
import './Card.css';
import React from "react";

const Card: React.FC = (props) => {
    return (
        <Fragment>
            <div className="white-card">{props.children}</div>
        </Fragment>
    )
}

export default Card;