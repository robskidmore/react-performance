import React from 'react';
import Button from './Button';

const Buttons = (props) => {
  return (
    <div className='buttons'>
      <Button text="Random" value="random" onClick={props.changeIndex}/>
      <Button text="Index" value="index" onClick={props.changeIndex}/>
      <Button text="Id" value="id" onClick={props.changeIndex}/>
    </div>
  )
}

export default Buttons;
