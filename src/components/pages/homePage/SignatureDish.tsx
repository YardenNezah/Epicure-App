import SignatureItem from "./SignatureItem";
import "./HomePage.scss";
import Slider from "react-slick";
import SlideArrow from "../../layout/arrow/SlideArrow";

const SignatureDish = ({ dishes }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 2 } },
      { breakpoint: 1050, settings: { slidesToShow: 1.39 } },
    ],
    nextArrow: (
      <SlideArrow className={""} style={{ undefined }} onClick={undefined} />
    ),
    prevArrow: (
      <SlideArrow className={""} style={{ undefined }} onClick={undefined} />
    ),
  };
  const smallerArr= dishes.slice(0,3);
  return (
    <div className="slider-div">
      <Slider {...settings}>
        {smallerArr &&
          smallerArr.map((dish:any) => {
            return <SignatureItem dish={dish} key={dish}/>;
          })}
      </Slider>
    </div>
  );
};

export default SignatureDish;
