import React from 'react'
import PropTypes from 'prop-types'

const style = (position, offset) => {
  switch (position) {
    case 'top-right':
      return { top: offset, right: offset }
    case 'bottom-right':
      return { bottom: offset, right: offset }
    case 'bottom-left':
      return { bottom: offset, left: offset }
    case 'top-left':
      return { top: offset, left: offset }
  }
}

const PositioningWrapper = ({ position, children, offset, ...props }) => (
  <div {...props} style={{ position: 'absolute', ...style(position, offset) }}>
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
  ]).isRequired,
  offset: PropTypes.string.isRequired
}

export default PositioningWrapper
