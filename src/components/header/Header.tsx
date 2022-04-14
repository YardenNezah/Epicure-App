import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DesktopHeader />
    </Fragment>
  );
};

export default Header;
