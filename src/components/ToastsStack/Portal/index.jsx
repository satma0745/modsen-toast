import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ToastStack from '../Core'
import PositioningWrapper from './PositioningWrapper'

const configureParentNodeStyling = (parentNode) => {
  const oldPosition = parentNode.style.position
  parentNode.style.position = 'relative'

  const undo = () => {
    parentNode.style.position = oldPosition
  }
  return undo
}

const stackDirection = (stackPosition) => {
  return stackPosition.startsWith('top') ? 'top-down' : 'down-top'
}

const slidingSide = (stackPosition) => {
  return stackPosition.split('-')[1]
}

const Toasts = ({ position, parentNode, ...props }) => {
  useEffect(() => configureParentNodeStyling(parentNode), [parentNode])

  return ReactDOM.createPortal(
    <PositioningWrapper {...props} position={position}>
      <ToastStack
        toastsDirection={stackDirection(position)}
        slideFrom={slidingSide(position)}
        slideTo={slidingSide(position)}
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
  parentNode: PropTypes.instanceOf(Element).isRequired
}
Toasts.defaultProps = {
  position: 'top-right',
  parentNode: document.querySelector('#root')
}

export default Toasts
