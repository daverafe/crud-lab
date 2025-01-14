import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.manageReviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({type: "ADD_REVIEW", payload: review}),
    deleteReview: (reviewId) => dispatch({type: "DELETE_REVIEW", payload: reviewId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsContainer);
