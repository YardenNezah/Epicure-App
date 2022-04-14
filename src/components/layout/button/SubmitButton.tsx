import React from 'react'
import './Button.scss';

const SubmitButton: React.FC<{onClick:any}> = (props) => {
  return (
    <button className='submit-btn' type='submit' onClick={props.onClick}>Submit</button>
  )
}

export default SubmitButton