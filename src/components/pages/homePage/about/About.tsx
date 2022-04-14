import "./About.scss";
import aboutLogo from "../../../../assets/about-logo.png";
import GetAppButton from "../../../layout/button/GetAppButton";
import appStore from "../../../../assets/apple-icon.png";
import googlePlay from "../../../../assets/google-icon.png";
import GreyCard from "../../../layout/card/GreyCard";

const About = () => {
  return (
    <GreyCard>
        <p className="about-title">ABOUT US :</p>      
        <div className="about-container">
        <div className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum. <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros.
        </div>
        <img src={aboutLogo} alt="about" className="about-logo"></img>
      </div>
      <div className="get-app-container">
        <GetAppButton
          content={"Download on the "}
          app={"App Store"}
          img={appStore}
        ></GetAppButton>
        <GetAppButton
          content={"Get it on "}
          app={"Google Play"}
          img={googlePlay}
        ></GetAppButton>
      </div>
    </GreyCard>
  );
};

export default About;
