import React from 'react';
import Color from './Color';
import Button from './Button';

class ButtonsAndColors extends React.Component {
  state = {
    title: 'Colors'
  }

  updateTitle = (e) => {
    const title = e.target.value
    this.setState({title});
  }

  render() {
    return (
      <div className='container'>
        <div className='title'>
          <h1>{this.state.title}</h1>
          <input type='text' onChange={this.updateTitle} value={this.state.title} />
        </div>
        <div className='buttons'>
          <Button text="Random" value="random" onClick={this.props.changeIndex}/>
          <Button text="Index" value="index" onClick={this.props.changeIndex}/>
          <Button text="Id" value="id" onClick={this.props.changeIndex}/>
        </div>
        <div className='colors'>
        {
          this.props.colors.map(({color, id}, index) => {
            // let key = Math.random();
            // let key = index;
            let key = id;
            return (
              <Color key={key} onClick={this.props.onClick} color={color} display={key} />
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default ButtonsAndColors;
