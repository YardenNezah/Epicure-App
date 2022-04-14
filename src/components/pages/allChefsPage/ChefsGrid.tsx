import BeigeCard from "../../layout/card/BeigeCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { useEffect } from "react";
import { fetchChefs } from "../../../store/chefDataSlice";
import "./AllChefs.scss";

const ChefsGrid = () => {
  const dispatch = useAppDispatch();
  const { chefs } = useSelector((state: any) => state.chefs);

  useEffect(() => {
    dispatch(fetchChefs());
  },[]);

  return (
    <div className="restaurants-grid">
      {chefs.map((item: any) => {
        return (
          <Link to={`/chef/${item.chefName}`} className="to-chef-btn">
            <BeigeCard
              key={item.chefName}
              title={item.chefName}
              detail={""}
              img={item.chefImage}
            ></BeigeCard>
          </Link>
        );
      })}
    </div>
  );
};

export default ChefsGrid;
