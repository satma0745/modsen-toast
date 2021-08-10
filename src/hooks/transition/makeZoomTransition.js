const makeZoomTransitionStyles = ({ transitionDuration }) => {
  const transition = `transform ${transitionDuration}ms`

  return {
    entering: { transform: 'scale(0)' },
    entered: { transform: 'scale(1)', transition },
    exiting: { transform: 'scale(0)', transition }
  }
}

export default makeZoomTransitionStyles
