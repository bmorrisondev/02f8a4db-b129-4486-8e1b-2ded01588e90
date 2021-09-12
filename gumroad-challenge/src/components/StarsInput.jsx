import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StarIcon from './StarIcon'

const StarsInputWrapper = styled.div`
  display: flex;
`

function StarsInput({ onClick }) {
  const [starsToFill, setStarsToFill] = useState(0)
  const [appliedStarsToFill, setAppliedStarsToFill] = useState(0)

  function onMouseOver(rating) {
    setStarsToFill(rating)
  }

  function onMouseLeave() {
    setStarsToFill(0)
  }

  function onStarClicked(rating) {
    setAppliedStarsToFill(rating)
    if(onClick) {
      onClick(rating)
    }
  }

  return (
    <StarsInputWrapper>
      {[1,2,3,4,5].map(el => (
        <StarIcon key={el}
          filled={starsToFill > 0 ? starsToFill >= el : appliedStarsToFill >= el}
          onClick={onClick ? () => onStarClicked(el) : null}
          onMouseOver={() => onMouseOver(el)}
          onMouseLeave={() => onMouseLeave(el)} />
      ))}
    </StarsInputWrapper>
  )
}

export default StarsInput
