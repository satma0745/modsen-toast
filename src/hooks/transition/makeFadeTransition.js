const makeFadeTransitionStyles = ({ transitionDuration }) => {
  const transition = `opacity ${transitionDuration}ms`

  return {
    entering: { opacity: 0 },
    entered: { opacity: 1, transition },
    exiting: { opacity: 0, transition }
  }
}

export default makeFadeTransitionStyles
