import React from 'react'
import PropTypes from 'prop-types'

const style = (position) => {
  return position.split('-').reduce((style, side) => {
    style[side] = 0
    return style
  }, {})
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
