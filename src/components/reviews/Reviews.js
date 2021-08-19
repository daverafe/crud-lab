import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const associatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <ul>
        {associatedReviews.map(review => {
            return <Review review={review} deleteReview={() => this.props.deleteReview(review.id)}/>
          }
        )}
      </ul>
    );
  }
};

export default Reviews;