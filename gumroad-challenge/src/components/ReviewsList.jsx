import React from 'react'
import styled from 'styled-components'
import Stars from './Stars'

const ReviewsListWrapper = styled.div`
  .reviews-list {
    margin-top: 10px;

    .rating {
      display: flex;
      margin-bottom: 20px;

      .review-content {
        margin-left: 10px;
        color: #777;

        .review-rating-num {
          font-weight: bold;
          font-size: 18px;
          margin-right: 5px;
          color: black;
        }
      }
    }
  }
`

function ReviewsList({ reviews }) {
  return (
    <ReviewsListWrapper class="reviews-wrapper">
      <h2>Ratings</h2>
      <div class="reviews-list">
        {reviews.map((el, idx) => (
          <div key={idx} className="rating">
            <Stars className="rating-stars" count={el.rating} hideCount />
            <div className="review-content">
              <span className="review-rating-num">{ el.rating }</span>
              { el.reviewContent }
            </div>
          </div>
        ))}
      </div>
    </ReviewsListWrapper>
  )
}

export default ReviewsList
