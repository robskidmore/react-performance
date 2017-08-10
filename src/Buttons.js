import React from 'react';
import Button from './Button';

const Buttons = (props) => {
  return (
    <div className='buttons'>
      <h3>Index by</h3>
      <Button index={props.index} text="Math.random()" value="random" onClick={props.changeIndex}/>
      <Button index={props.index} text="index" value="index" onClick={props.changeIndex}/>
      <Button index={props.index} text="color.id" value="id" onClick={props.changeIndex}/>
    </div>
  )
}

export default Buttons;
