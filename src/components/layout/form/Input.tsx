import React, { Fragment, useState } from 'react';
import './Input.scss';

const Input: React.FC<{content: string, type:string, placeholder:string, onChange:any, value:any, minLength:number, maxLength:number}> = (props) => {
    const [notRadioOrCheckbox, setNotRadioOrCheckbox] = useState(props.type !== 'radio' && props.type !== 'checkbox');
  return (
      <Fragment>
      {notRadioOrCheckbox && (    <><label htmlFor={props.content}>{props.content}</label><><input type={props.type} className="input" placeholder={props.placeholder} onChange={props.onChange} value={props.value} minLength={props.minLength} maxLength={props.maxLength} required></input><br /></></>)}
      {!notRadioOrCheckbox && (<div className='radio-input'><input type={props.type} name="input-name" value={props.content}></input> <label htmlFor="input-name">{props.content}</label><br></br></div>)}      
      </Fragment>
  )
}

export default Input;