import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import DismissIcon from '../assets/dismiss.svg'

const DismissButtonBody = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  width: 1em;
  height: 1em;
`

const DismissButton = ({ color, ...props }) => (
  <DismissButtonBody {...props}>
    <DismissIcon style={{ fill: color }} />
  </DismissButtonBody>
)
DismissButton.propTypes = {
  color: PropTypes.string.isRequired
}

export default DismissButton
