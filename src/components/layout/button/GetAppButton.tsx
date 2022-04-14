import React from "react";
import './Button.scss';

const GetAppButton: React.FC<{content: string, app: string, img: string}>= (props) => {
    return (
            <button className="get-app-btn"><img src={props.img} alt="img" className="app-icon"></img> <div className="app-content">{props.content}<p className="app-name">{props.app}</p></div></button>
    );
}
export default GetAppButton;