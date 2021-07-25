import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DismissIcon = ({ color, style, ...props }) => (
  <svg
    {...props}
    style={{ ...style, fill: color }}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(0 -0.001)">
      <path
        className="a"
        d="M18.83,16,31.414,3.417a2,2,0,0,0-2.83-2.83L16,13.172,3.416.587a2,2,0,0,0-2.83,2.83L13.171,16,.586,28.585a2,2,0,1,0,2.83,2.829L16,18.83,28.584,31.415a2,2,0,0,0,2.83-2.83Z"
      />
    </g>
  </svg>
)

const DismissButtonBody = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  width: 1em;
  height: 1em;
`

const DismissButton = ({ color, ...props }) => (
  <DismissButtonBody {...props}>
    <DismissIcon color={color} />
  </DismissButtonBody>
)
DismissButton.propTypes = {
  color: PropTypes.string.isRequired
}

export default DismissButton
