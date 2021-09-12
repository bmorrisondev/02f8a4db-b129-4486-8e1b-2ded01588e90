import React from 'react'
import styled from 'styled-components'
import StarIcon from './StarIcon'

const StarsWrapper = styled.div`
  display: flex;

  .rating-summary-num {
    font-weight: bold;
    font-size: 24px;
    margin-right: 10px;
  }
`

function Stars({ count, hideCount }) {
  return (
    <StarsWrapper>
      {count && !hideCount && (
        <div className="rating-summary-num">
          { count }
        </div>
      )}
      <StarIcon filled={count >= 1} />
      <StarIcon filled={count >= 2} />
      <StarIcon filled={count >= 3} />
      <StarIcon filled={count >= 4} />
      <StarIcon filled={count >= 5} />
    </StarsWrapper>
  )
}

export default Stars
