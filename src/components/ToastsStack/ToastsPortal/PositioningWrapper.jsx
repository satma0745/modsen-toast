import React from 'react'
import PropTypes from 'prop-types'

import { useConfiguration } from '@hooks'

const PositioningWrapper = ({ children, ...props }) => {
  const { horizontalPosition, verticalPosition, edgeDistance } =
    useConfiguration()

  return (
    <div
      {...props}
      style={{
        position: 'absolute',
        [horizontalPosition]: 0,
        [verticalPosition]: edgeDistance
      }}
    >
      {children}
    </div>
  )
}
PositioningWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default PositioningWrapper
