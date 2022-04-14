import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddToBag = (props: any) => {
  const [addedDish, setAddedDish]: any = useState([]);

  const addToBag = (e: any) => {
    // setAddedDish([quantityNumber,choosenSide , quantityNumber]);
    // console.log(choosenSide, addedDish);
    e.preventDefault();
    setAddedDish(props.dish);
    console.log(addedDish);
  };
  return (
    <Link to="/cart/:addedDish">
      <button className="add-to-bag-btn" onClick={(e) => addToBag}>
        ADD TO BAG
      </button>
    </Link>
  );
};

export default AddToBag;
