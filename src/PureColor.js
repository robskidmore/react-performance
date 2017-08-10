import React from 'react';

class PureColor extends React.PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick(this.props.color);
  }

  render() {
    return (
      <div className="color" onClick={this.handleClick} style={{backgroundColor: this.props.color}}>
        <span style={{backgroundColor: '#fff'}}>{this.props.display}</span>
      </div>
    )
  }
}

export default PureColor;
