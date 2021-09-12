import React, { useEffect, useState } from 'react'
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
  const [starsToFill, setStarsToFill] = useState(0)

  useEffect(() => {
    if(count) {
      let starsToFill = Math.round(count)
      setStarsToFill(starsToFill)
    }
  }, [count])

  return (
    <StarsWrapper>
      {count && !hideCount && (
        <div className="rating-summary-num">
          { count }
        </div>
      )}
      <StarIcon filled={starsToFill >= 1} />
      <StarIcon filled={starsToFill >= 2} />
      <StarIcon filled={starsToFill >= 3} />
      <StarIcon filled={starsToFill >= 4} />
      <StarIcon filled={starsToFill >= 5} />
    </StarsWrapper>
  )
}

export default Stars
