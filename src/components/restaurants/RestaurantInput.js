import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {

  state ={
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const restaurant = {
      id: cuid(),
      text: this.state.text
    }
    this.props.addRestaurant(restaurant)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
