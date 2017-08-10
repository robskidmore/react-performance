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
    index: 'random',
    split: false,
    pure: false,
  }

  deleteColor = (color) => {
    const colors = _.reject(this.state.colors, {'color': color});
    this.setState({colors});
  }

  changeIndex = (index) => {
    this.setState({index})
  }

  changeSplit = () => {
    this.setState((prevState) => ({
      split: !prevState.split
    }))
  }

  changePure = () => {
    this.setState((prevState) => ({
      pure: !prevState.pure
    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.changeSplit}>{this.state.split ? 'Split' : 'Monolith'}</button>
        <button onClick={this.changePure}>{this.state.pure ? 'Pure' : 'Functional'}</button>
        { this.state.split
          ?
            <div className='container'>
              <Title />
              <Buttons changeIndex={this.changeIndex} index={this.state.index} />
              <Colors
                pure={this.state.pure}
                index={this.state.index}
                colors={this.state.colors}
                onClick={this.deleteColor}
              />
            </div>
          :
            <ButtonsAndColors
              changeIndex={this.changeIndex}
              index={this.state.index}
              colors={this.state.colors}
              onClick={this.deleteColor}
            />
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
