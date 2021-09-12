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
      if(count === 3.3) {
        console.log("yay!")
      }
      let starsToFill = Math.round(count * 2) / 2
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
      {[1,2,3,4,5].map(el => (
        <StarIcon key={el}
          filled={starsToFill >= el}
          isHalfStar={starsToFill === el - 0.5} />
      ))}
    </StarsWrapper>
  )
}

export default Stars
