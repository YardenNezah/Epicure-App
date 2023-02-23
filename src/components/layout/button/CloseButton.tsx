import { MouseEventHandler } from "react";
import x from '../../../assets/x.png'
const CloseButton = (props: { onClick: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  return (
    <button className="close-nav-bar" onClick={props.onClick}><img src={x} alt="x" /></button>
  )
}

export default CloseButton;