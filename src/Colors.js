import React from 'react';
import Color from './Color';
import PureColor from './PureColor';

const Colors = (props) => {
  return (
    <div className='colors'>
      {
        props.colors.map(({color, id}, index) => {
          let key = index;

          if(props.index === 'id') {
            key = id;
          }

          if(props.index === 'random') {
            key = Math.random();
          }

          if(props.pure) {
            return (
              <PureColor key={key} onClick={props.onClick} color={color} display={key} />
            )
          }

          return (
            <Color key={key} onClick={props.onClick} color={color} display={key} />
          )
        })
      }
    </div>
  )
}

export default Colors;
