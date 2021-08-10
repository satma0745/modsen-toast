import React from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'

import { useConfiguration } from '@hooks'

const getFlexDirection = (position) => {
  switch (position) {
    case 'top':
      return 'column'
    case 'bottom':
      return 'column-reverse'
    default:
      throw new Error('Unsupported position option.')
  }
}

const StyledTransitionGroup = styled(TransitionGroup)`
  overflow: hidden;
  display: flex;
  flex-direction: ${({ position }) => getFlexDirection(position)};
  padding-${({ side }) => side}: ${({ offset }) => offset};
`

const ToastContainer = ({ children }) => {
  const configuration = useConfiguration()

  return (
    <StyledTransitionGroup
      position={configuration.verticalPosition}
      side={configuration.horizontalPosition}
      offset={configuration.edgeDistance}
    >
      {children}
    </StyledTransitionGroup>
  )
}
ToastContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ToastContainer
