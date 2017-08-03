import React from 'react';

const Color = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(props.color);
    props.onClick(props.color);
  }

  return (
    <div className="color" onClick={handleClick} style={{backgroundColor: props.color}}>
      <span style={{backgroundColor: '#fff'}}>{props.display}</span>
    </div>
  )
}

export default Color;
