import { NavLink } from 'react-router-dom';
import './Button.scss';

const NavLinkTemplate: React.FC<{content: string, to:string}> = (props) => {
  return (
    <NavLink to={props.to} activeClassName="active-link" className="footer-li">{props.content}</NavLink>
  )
}

export default NavLinkTemplate;