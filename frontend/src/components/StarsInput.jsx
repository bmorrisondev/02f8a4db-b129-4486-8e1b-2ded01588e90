import React, { useState } from 'react'
import styled from 'styled-components'
import StarIcon from './StarIcon'

const StarsInputWrapper = styled.div`
  display: flex;
`

function StarsInput({ onClick }) {
  const [starsToFill, setStarsToFill] = useState(0)
  const [appliedStarsToFill, setAppliedStarsToFill] = useState(0)

  function onMouseOver(rating, e) {
    let rect = e.target.getBoundingClientRect()
    let x = e.clientX - rect.left;
    console.log(x)
    if(x < rect.width / 2) {
      rating = rating - 0.5
    }
    setStarsToFill(rating)
  }

  function onMouseLeave() {
    setStarsToFill(0)
  }

  function onStarClicked() {
    setAppliedStarsToFill(starsToFill)
    if(onClick) {
      onClick(starsToFill)
    }
  }

  return (
    <StarsInputWrapper>
      {[1,2,3,4,5].map(el => (
        <StarIcon key={el}
          filled={starsToFill > 0 ? starsToFill >= el : appliedStarsToFill >= el}
          isHalfStar={starsToFill > 0 ? starsToFill === el - 0.5 : appliedStarsToFill === el - 0.5}
          onClick={onClick ? () => onStarClicked() : null}
          onMouseOver={(e) => onMouseOver(el, e)}
          onMouseLeave={() => onMouseLeave()}
          large />
      ))}
    </StarsInputWrapper>
  )
}

export default StarsInput
