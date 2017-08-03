import React from 'react';

const Button = (props) => {
  const handleClick = () => {
    props.onClick(props.value)
  }

  return (
    <button type='button' onClick={handleClick}>{props.text}</button>
  )
}

export default Button;
