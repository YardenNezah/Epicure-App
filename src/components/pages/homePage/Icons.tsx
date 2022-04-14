import "./HomePage.scss";
import GreyCard from "../../layout/card/GreyCard";

const Icons = () => {
  const icons = {
    spicy: "https://i.ibb.co/5FPS0NV/group-2.png",
    spicyDekstop: "https://i.ibb.co/ns4DL2R/spicy-Desktop.png",
    vegan: "https://i.ibb.co/LnVYWPv/vegan-icon.png",
    veganDesktop: "https://i.ibb.co/LnVYWPv/vegan-icon.png",
    vegiterian: "https://i.ibb.co/vwGsDJ8/vegiterian-icon.png",
    vegiterianDesktop: "https://i.ibb.co/7JJQMKQ/vegetarian-Desktop.png",
  };
  return (
    
      <div className="icons">
        <GreyCard>
      <p className="icons-title"> THE MEANING OF OUR ICONS :</p>
      <div className="icons-container">
        <div>
          <img src={icons.spicy} alt="icon" className="spicy-icon" srcSet={`${icons.spicyDekstop} 800w`}></img>Spicy
        </div>
        <div>
          <img src={icons.vegiterian} alt="icon" className="veg-icon" srcSet={`${icons.vegiterianDesktop} 800w`}></img>Vegitarian
        </div>
        <div>
          <img src={icons.vegan} alt="icon" className="vegan-icon" srcSet={`${icons.veganDesktop} 800w`}></img>Vegan
        </div>
      </div>
       </GreyCard>
      </div>
   
  );
};

export default Icons;
