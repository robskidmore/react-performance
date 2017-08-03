import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import Colors from './Colors';
import Buttons from './Buttons';
import Title from './Title';
import ButtonsAndColors from './ButtonsAndColors';

import data from './data';

import './index.css';

import Perf from 'react-addons-perf';
window.Perf = Perf;

class App extends React.Component {
  state = {
    colors: _.uniqBy(data, 'color'),
    index: 'index',
  }

  deleteColor = (color) => {
    const colors = _.reject(this.state.colors, {'color': color});
    this.setState({colors});
  }

  changeIndex = (index) => {
    this.setState({index})
  }

  render () {
    return (
      <div>
        {/* <ButtonsAndColors
          changeIndex={this.changeIndex}
          index={this.state.index}
          colors={this.state.colors}
          onClick={this.deleteColor}
        />
        <hr /> */}
        <div className='container'>
          <Title />
          <Buttons changeIndex={this.changeIndex} />
          <Colors index={this.state.index} colors={this.state.colors} onClick={this.deleteColor} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
