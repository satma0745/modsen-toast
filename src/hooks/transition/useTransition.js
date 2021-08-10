import useConfiguration from '@hooks/configuration'

import makeFadeTransition from './makeFadeTransition'
import makeSlideTransition from './makeSlideTransition'
import makeZoomTransition from './makeZoomTransition'

import makeCollapseTransition from './makeCollapseTransition'

const selectTransition = ({ transition }) => {
  switch (transition) {
    case 'fade':
      return makeFadeTransition
    case 'slide':
      return makeSlideTransition
    case 'zoom':
      return makeZoomTransition
    default:
      throw new Error('Unsupported transition option.')
  }
}

const useTransition = () => {
  const configuration = useConfiguration()

  const makeTransition = selectTransition(configuration)
  const toastTransition = makeTransition(configuration)

  const collapseTransition = makeCollapseTransition(configuration)

  return { toastTransition, collapseTransition }
}

export default useTransition
