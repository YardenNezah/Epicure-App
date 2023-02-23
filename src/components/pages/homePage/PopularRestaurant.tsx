import "./HomePage.scss";
import Slider from "react-slick";
import PopularItem from "./PopularItem";
import SlideArrow from "../../layout/arrow/SlideArrow";

const PopularRestaurant = ({ data }:any) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 2 } },
      { breakpoint: 1050, settings: { slidesToShow: 1.39} },
    ],
    nextArrow: (
      <SlideArrow className={""} style={{ undefined }} onClick={undefined} />
    ),
    prevArrow: (
      <SlideArrow className={""} style={{ undefined }} onClick={undefined} />
    ),
  };
  return (
    <div className="slider-div">
      <Slider {...settings}>
        {data &&
          data.map((restaurant:any) => {
            return <PopularItem restaurant={restaurant} key={restaurant} />
          })}
      </Slider>
    </div>
  );
};

export default PopularRestaurant;
