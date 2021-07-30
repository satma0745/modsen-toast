import React from 'react'
import { useTransition } from 'react-spring'
import { useConfiguration } from '@components/Configuration'

import makeTransition from './makeTransition'

const useToastTransition = (elements, elementKeySelector) => {
  const configuration = useConfiguration()
  const [transitionStages, generateStyle] = makeTransition(configuration, '6em')

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
