import React from 'react'
import PropTypes from 'prop-types'

import { useConfiguration } from '@components/Configuration'
import Container from './Container'

const ToastsPresentation = ({ children, ...props }) => {
  const { internalSpacing, edgeDistance, direction } = useConfiguration()

  return (
    <Container
      internalSpacing={internalSpacing}
      edgeDistance={edgeDistance}
      direction={direction}
      {...props}
    >
      {children}
    </Container>
  )
}
ToastsPresentation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ToastsPresentation
