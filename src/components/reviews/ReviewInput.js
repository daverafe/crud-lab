import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid';


class ReviewInput extends Component {

  state = {
    text: ""
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const review ={
      id: cuid(),
      text: this.state.text,
      restaurantId: this.props.restaurant.id 
    }
    this.props.addReview(review)
    this.setState({
      text: ""
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
