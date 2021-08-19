import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => {
          return <Review key={review.id} review={review} deleteReview={() => this.props.deleteReview(review.id)}/>
        })}
      </ul>
    );
  }
};

export default Reviews;