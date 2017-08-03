import React from 'react';
import Color from './Color';

const Colors = (props) => {
  return (
    <div className='colors'>
      {
        props.colors.map(({color, id}, index) => {
          // let kkkkkkkey = Math.random();
          // let key = index;
          let key = id;
          return (
            <Color key={key} onClick={props.onClick} color={color} display={key} />
          )
        })
      }
    </div>
  )
}

export default Colors;
