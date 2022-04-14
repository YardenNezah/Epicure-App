import NavLinkTemplate from "../layout/button/NavLinkTemplate";
import { Link } from "react-router-dom";
import Search from "../layout/search/Search";
import logo from "../../assets/group-10.png";
import user from "../../assets/user-icon-copy.png";
import bag from "../../assets/group-2-copy.png";
import "./Header.scss";

const DesktopHeader = () => {
  return (
    <nav className="desktop-top-nav">
      <div className="left-nav">
        <Link to="/">
          <img src={logo} alt="logo" className="logo"></img>
        </Link>
        <Link to="/" className="epicure">
          {" "}
          EPICURE{" "}
        </Link>
        <NavLinkTemplate content={"Restaurants"} to={"/restaurants"} />
        <NavLinkTemplate content={"Chefs"} to={"/chefs"} />
      </div>

      <div className="right-nav">
        <Search />
        <Link to="/signin">
          <img src={user} alt="user"></img>
        </Link>
        <Link to="/cart">
          <img src={bag} alt="bag"></img>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopHeader;
