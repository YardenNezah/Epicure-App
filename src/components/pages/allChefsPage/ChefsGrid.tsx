import BeigeCard from "../../layout/card/BeigeCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { Fragment, useEffect, useState } from "react";
import { fetchChefs } from "../../../store/chefDataSlice";
import "./AllChefs.scss";

const ChefsGrid = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useAppDispatch();
  const { chefs } = useSelector((state: any) => state.chefs);

  useEffect(() => {
    dispatch(fetchChefs());
  }, []);

  const numberOfPages = Math.ceil(chefs.length / 6);
  let pages = [];
  for (let page = 1; page <= numberOfPages; page++) {
    pages.push(
      <Link
        key={page}
        className="page"
        to={`/chefs/${page}`}
        onClick={() => setPageNumber(page)}
      >
        {page}
      </Link>
    );
  }

  return (
    <Fragment>
      <div className="restaurants-grid chefs-grid">
        {chefs.slice(pageNumber * 6 - 6, pageNumber * 6).map((item: any) => (
          <Link to={`/chef/${item.chefName}`} className="to-chef-btn" key={item._id}>
            <BeigeCard
              key={item.chefName}
              title={item.chefName}
              detail={""}
              img={item.chefImage}
            ></BeigeCard>
          </Link>
        ))}
      </div>
      <div className="pagination">{pages}</div>
    </Fragment>
  );
};

export default ChefsGrid;
