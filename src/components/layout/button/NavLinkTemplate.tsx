import { NavLink } from "react-router-dom";
import "./Button.scss";

const NavLinkTemplate: React.FC<{ content: string; to: string }> = (props) => {
  const navigateToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <NavLink
      to={props.to}
      activeClassName="active-link"
      className="footer-li"
      onClick={navigateToTop}
    >
      {props.content}
    </NavLink>
  );
};

export default NavLinkTemplate;
