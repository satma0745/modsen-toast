import React from 'react'
import { useTransition } from 'react-spring'
import { useConfiguration } from '@components/Configuration'

import slideTransition from './slide'

import getDirections from './directions'

const selectTransition = ({ transition }) => {
  switch (transition) {
    case 'slide':
      return slideTransition
    default:
      throw new Error('Unsupported transition option.')
  }
}

const useToastTransition = (elements, elementKeySelector) => {
  const configuration = useConfiguration()

  const directions = getDirections(configuration)

  const transition = selectTransition(configuration)
  const [transitionStages, generateStyle] = transition(
    configuration,
    directions,
    '6rem'
  )

  const transitions = useTransition(
    elements.map((element, index) => ({ ...element, index })),
    {
      ...transitionStages,
      keys: elementKeySelector
    }
  )

  return (Component) => {
    return transitions((style, payload) => (
      <Component
        style={generateStyle(style)}
        toastProps={{
          ...payload,
          toastTypesConfig: configuration.toastTypesConfig
        }}
      />
    ))
  }
}

export default useToastTransition
