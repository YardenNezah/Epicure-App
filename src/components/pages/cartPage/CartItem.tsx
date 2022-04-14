import React from "react";
import { Link } from "react-router-dom";
const CartItem = ({ dish }: any) => {
  return (
    <tr>
      <td>
        <Link to={`/dishPage/${dish.name}`}>
          <img src={dish.mobileImg} alt="dish" className="dish" />
        </Link>
      </td>
      <td>{dish.restaurant}</td>
      <td>{dish.name}</td>
      <td>{dish.side}</td>
      <td>{dish.changes}</td>
      <td>{dish.quantity}</td>
      <td>{dish.price}</td>
      <td>delete</td>
    </tr>
  );
};

export default CartItem;
