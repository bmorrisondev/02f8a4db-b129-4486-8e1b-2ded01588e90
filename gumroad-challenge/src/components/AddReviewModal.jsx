import React, { useState } from 'react'
import styled from 'styled-components'
import StarsInput from './StarsInput'
import Button from './Button'
import reviewsApiService from '../services/reviewsApiService'

const AddReviewModalWrapper = styled.div`
  display: flex;
  position: absolute;
  background-color: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  justify-content: center;
  align-items: center;

  .modal-body {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 50vh;
    width: 50vh;
    min-width: 600px;
    border-radius: 5px;
    padding: 0px 20px;

    h2 {
      margin-bottom: 0px;
      font-size: 32px;
    }

    #addReviewModalStars {
      display: flex;
    }

    #ratingInput {
      margin-bottom: 20px;
      border: none;
    }
  }
`

function AddReviewModal({ productId, onHide, onReviewSubmitted }) {
  const [rating, setRating] = useState(0)
  const [input, setInput] = useState("")

  function hideModal() {
    if(onHide) {
      onHide()
    }
  }

  function onStarClicked(rating) {
    setRating(rating)
  }

  async function onSubmitReviewClicked() {
    await reviewsApiService.addReview({
      reviewContent: input,
      rating,
      productId
    })

    if(onReviewSubmitted) {
      onReviewSubmitted({
        reviewContent: input,
        rating,
        productId
      })
    }

    hideModal()
  }

  return (
    <AddReviewModalWrapper>
      <div className="modal-body">
        <h2>What's your rating?</h2>
        <h3>Rating</h3>
        <div id="addReviewModalStars">
          <StarsInput onClick={onStarClicked} />
        </div>
        <h3>Review</h3>
        <textarea
          id="ratingInput"
          placeholder="Start typing..."
          value={input}
          onChange={(e) => setInput(e.target.value)}>
        </textarea>
        <div>
          <Button onClick={() => onSubmitReviewClicked()}>Submit Review</Button>
        </div>
      </div>
    </AddReviewModalWrapper>
  )
}

export default AddReviewModal
