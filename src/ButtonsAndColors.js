import React from 'react';
import Color from './Color';
import Button from './Button';

class ButtonsAndColors extends React.Component {
  state = {
    title: 'React Performance'
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
          <h3>Index by</h3>
          <Button index={this.props.index} text="Math.random()" value="random" onClick={this.props.changeIndex}/>
          <Button index={this.props.index} text="index" value="index" onClick={this.props.changeIndex}/>
          <Button index={this.props.index} text="color.id" value="id" onClick={this.props.changeIndex}/>
        </div>
        <div className='colors'>
        {
          this.props.colors.map(({color, id}, index) => {
          let key = index;

          if(this.props.index === 'id') {
            key = id;
          }

          if(this.props.index === 'random') {
            key = Math.random();
          }
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
