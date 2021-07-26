import React from 'react'
import PropTypes from 'prop-types'
import { useConfiguration } from '@components/Configuration'

const style = (initial, position) => {
  switch (position) {
    case 'top-right':
      return { ...initial, top: 0, right: 0 }
    case 'bottom-right':
      return { ...initial, bottom: 0, right: 0 }
    case 'bottom-left':
      return { ...initial, bottom: 0, left: 0 }
    case 'top-left':
      return { ...initial, top: 0, left: 0 }
    default:
      throw new Error('Unsupported position option.')
  }
}

const PositioningWrapper = ({ children, ...props }) => {
  const { position } = useConfiguration()

  return (
    <div {...props} style={style({ position: 'absolute' }, position)}>
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
