import { MouseEventHandler } from "react";

const CloseButton = (props: { onClick: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  return (
    <button className="close-nav-bar" onClick={props.onClick}>X</button>
  )
}

export default CloseButton;