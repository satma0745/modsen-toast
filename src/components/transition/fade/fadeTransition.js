import makeTranslate3d from './translate3d'

const fadeTransition = (configuration, directions, elementHeight) => {
  const { internalSpacing } = configuration
  const height = `calc(${elementHeight} + ${internalSpacing})`

  const translate3d = makeTranslate3d(directions, height)

  const transitionStages = {
    from: { position: 'absolute', opacity: 0 },
    enter: ({ index }) => ({ opacity: 1, index }),
    update: ({ index }) => ({ index }),
    leave: { opacity: 0 }
  }

  const generateStyle = ({ index, ...style }) => ({
    ...style,
    transform: index.to((i) => translate3d(i))
  })

  return [transitionStages, generateStyle]
}

export default fadeTransition
