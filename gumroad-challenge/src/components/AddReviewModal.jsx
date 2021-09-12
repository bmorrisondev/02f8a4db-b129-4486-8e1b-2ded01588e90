import React from 'react'
import styled from 'styled-components'
import Stars from './Stars'
import Button from './Button'

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

      svg {
        cursor: pointer;
      }
    }

    #ratingInput {
      margin-bottom: 20px;
      border: none;
    }
  }
`

function AddReviewModal({ onHide }) {

  function hideModal() {
    if(onHide) {
      onHide()
    }
  }

  function onSubmitReviewClicked() {
    // TODO: Remove after implementation
    hideModal()
  }

  return (
    <AddReviewModalWrapper>
      <div className="modal-body">
        <h2>What's your rating?</h2>
        <h3>Rating</h3>
        <div id="addReviewModalStars">
          <Stars />
        </div>
        <h3>Review</h3>
        <textarea id="ratingInput" placeholder="Start typing..."></textarea>
        <div>
          <Button onClick={() => onSubmitReviewClicked()}>Submit Review</Button>
        </div>
      </div>
    </AddReviewModalWrapper>
  )
}

export default AddReviewModal
