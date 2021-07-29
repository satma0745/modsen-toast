import React from 'react'
import { to, useTransition } from 'react-spring'

import { useConfiguration } from '@components/Configuration'
import useTranslate3d from './useTranslate3d'

const useSlidingAnimation = (elements, elementKeySelector, elementHeight) => {
  const { internalSpacing } = useConfiguration()
  const height = `calc(${elementHeight} + ${internalSpacing})`
  const translate3d = useTranslate3d(height)

  const transitions = useTransition(
    elements.map((element, index) => ({ ...element, index })),
    {
      from: { position: 'absolute', opacity: 0, xOffset: 1 },
      enter: ({ index }) => ({ opacity: 1, xOffset: 0, index }),
      update: ({ index }) => ({ index }),
      leave: { opacity: 0, xOffset: 1, height: 0 },
      keys: elementKeySelector
    }
  )

  return (Component) => {
    return transitions(({ xOffset, index, ...style }, payload) => {
      const composedStyle = {
        transform: to([xOffset, index], (x, i) => translate3d(x, i)),
        ...style
      }

      return <Component style={composedStyle} payload={payload} />
    })
  }
}

export default useSlidingAnimation
