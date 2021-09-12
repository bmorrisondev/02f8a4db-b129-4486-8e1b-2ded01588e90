import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  background-color: #fefefe;
  border: 1px solid #ddd;
  color: #777;
  font-weight: bold;
  padding: 0px 10px;
  border-radius: 3px;
  height: 35px;
  cursor: pointer;
`

function Button({ onClick, children }) {
  return (
    <ButtonWrapper onClick={onClick}>
      { children }
    </ButtonWrapper>
  )
}

export default Button
