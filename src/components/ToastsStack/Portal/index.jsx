import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ToastStack from '../Core'

import PositioningWrapper from './PositioningWrapper'
import { styleParentNode, stackDirection, slidingSide } from './utils'

const Toasts = ({
  position,
  parentNode,
  edgeDistance,
  internalSpacing,
  ...props
}) => {
  useEffect(() => styleParentNode(parentNode), [parentNode])

  return ReactDOM.createPortal(
    <PositioningWrapper {...props} position={position} offset={edgeDistance}>
      <ToastStack
        toastsDirection={stackDirection(position)}
        slideFrom={slidingSide(position)}
        slideTo={slidingSide(position)}
        internalSpacing={internalSpacing}
      />
    </PositioningWrapper>,
    parentNode
  )
}
Toasts.propTypes = {
  position: PropTypes.oneOf([
    'top-right',
    'bottom-right',
    'bottom-left',
    'top-left'
  ]),
  parentNode: PropTypes.instanceOf(Element).isRequired,
  edgeDistance: PropTypes.string.isRequired,
  internalSpacing: PropTypes.string.isRequired
}
Toasts.defaultProps = {
  position: 'top-right',
  parentNode: document.querySelector('#root'),
  edgeDistance: '1rem',
  internalSpacing: '1rem'
}

export default Toasts
