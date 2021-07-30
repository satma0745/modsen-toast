import fadeTransition from './fade'
import slideTransition from './slide'

import getDirections from './directions'

const selectTransition = ({ transition }) => {
  switch (transition) {
    case 'fade':
      return fadeTransition
    case 'slide':
      return slideTransition
    default:
      throw new Error('Unsupported transition option.')
  }
}

const makeTransition = (configuration, height) => {
  const transition = selectTransition(configuration)

  const directions = getDirections(configuration)
  return transition(configuration, directions, height)
}

export default makeTransition
