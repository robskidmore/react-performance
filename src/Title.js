import React from 'react';

class Title extends React.Component {
  state = {
    title: 'Colors'
  }

  updateTitle = (e) => {
    const title = e.target.value
    this.setState({title});
  }

  render() {
    return (
      <div className='title'>
        <h1>{this.state.title}</h1>
        <input type='text' onChange={this.updateTitle} value={this.state.title} />
      </div>
    )
  }
}

export default Title;
