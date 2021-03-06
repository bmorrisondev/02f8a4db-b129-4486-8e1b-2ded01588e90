import React from 'react'
import styled from 'styled-components'

const StarIconWrapper = styled.div`
  fill: ${props => props.filled ? 'rgb(236, 236, 14)' : '#ddd'};
  svg {
    fill-rule: evenodd;
    clip-rule: evenodd;
    stroke-linejoin: round;
    stroke-miterlimit: 2;
    width: ${props => props.large ? "35px" : "20px"};
    height: ${props => props.large ? "35px" : "20px"};
    cursor: ${props => props.clickable ? "pointer" : "inherit"}
  }
`

function StarIcon({ filled, isHalfStar, onClick, onMouseOver, onMouseLeave, large }) {
  return (
    <StarIconWrapper
      filled={filled}
      large={large}
      clickable={onClick ? true : false}
      onClick={onClick ? onClick : null}
      onMouseOver={onMouseOver ? onMouseOver : null}
      onMouseLeave={onMouseLeave ? onMouseLeave : null}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        version="1.1">
        {isHalfStar && (
          <linearGradient id="grad" x1="0" x2="100%" y1="0" y2="0">
            <stop offset="50%" stopColor="rgb(236, 236, 14)"/>
            <stop offset="50%" stopColor="#ddd"/>
          </linearGradient>
        )}
        <path
          d="M24.522,1.546c0.065,-0.21 0.259,-0.352 0.478,-0.352c0.219,-0 0.413,0.142 0.478,0.352c1.267,4.102 4.663,15.092 5.315,17.2c0.065,0.209 0.258,0.352 0.478,0.352c2.16,0 13.214,0 17.251,0c0.214,0 0.405,0.137 0.473,0.34c0.069,0.203 0.001,0.427 -0.17,0.558c-3.261,2.491 -12.3,9.396 -13.999,10.694c-0.166,0.127 -0.236,0.345 -0.174,0.545c0.639,2.068 4.078,13.197 5.337,17.27c0.064,0.208 -0.013,0.434 -0.192,0.558c-0.178,0.125 -0.416,0.119 -0.589,-0.013c-3.301,-2.521 -12.153,-9.284 -13.904,-10.622c-0.18,-0.136 -0.428,-0.136 -0.608,0c-1.751,1.338 -10.603,8.101 -13.904,10.622c-0.173,0.132 -0.411,0.138 -0.589,0.013c-0.179,-0.124 -0.256,-0.35 -0.192,-0.558c1.259,-4.073 4.698,-15.202 5.337,-17.27c0.062,-0.2 -0.008,-0.418 -0.174,-0.545c-1.699,-1.298 -10.738,-8.203 -13.999,-10.694c-0.171,-0.131 -0.239,-0.355 -0.17,-0.558c0.068,-0.203 0.259,-0.34 0.473,-0.34c4.037,0 15.091,0 17.251,0c0.22,0 0.413,-0.143 0.478,-0.352c0.652,-2.108 4.048,-13.098 5.315,-17.2Z"
          fill={isHalfStar ? "url(#grad)" : ""}
        />
      </svg>
    </StarIconWrapper>
  )
}

export default StarIcon
