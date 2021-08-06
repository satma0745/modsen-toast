const transition = 'opacity 1000ms'

const makeFadeTransitionStyles = () => ({
  entering: { opacity: 0 },
  entered: { opacity: 1, transition },
  exiting: { opacity: 0, transition }
})

export default makeFadeTransitionStyles
