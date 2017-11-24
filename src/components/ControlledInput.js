import React from 'react';

class ControlledInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return(
      <input type="text" value={this.state.value} onClick={this.handleChange} />
    );
  }
};

export default ControlledInput;
