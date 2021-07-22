import React from 'react'
import PropTypes from 'prop-types'

const style = (position) => {
  switch (position) {
    case 'top-right':
      return { top: 0, right: 0 }
    case 'bottom-right':
      return { bottom: 0, right: 0 }
    case 'bottom-left':
      return { bottom: 0, left: 0 }
    case 'top-left':
      return { top: 0, left: 0 }
  }
}

const PositioningWrapper = ({ position, children, ...props }) => (
  <div {...props} style={{ position: 'absolute', ...style(position) }}>
    {children}
  </div>
)
PositioningWrapper.propTypes = {
  position: PropTypes.oneOf([
    'top-right',
    'bottom-right',
    'bottom-left',
    'top-left'
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default PositioningWrapper
