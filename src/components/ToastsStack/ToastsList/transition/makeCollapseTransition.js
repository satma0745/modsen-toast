const transition = (timingFunction, delay, duration) => {
  return (property) => {
    return `${property} ${duration} ${timingFunction} ${delay}`
  }
}

const getInitialTransition = (styles) => {
  const property = styles.getPropertyValue('transition-property')
  const duration = styles.getPropertyValue('transition-duration')
  const timingFunction = styles.getPropertyValue('transition-timing-function')
  const delay = styles.getPropertyValue('transition-delay')
  return transition(timingFunction, delay, duration)(property)
}

const from = (node, delay, duration) => {
  const computedStyles = window.getComputedStyle(node, null)
  node.style.height = computedStyles.getPropertyValue('height')
  node.style.transition = [
    getInitialTransition(computedStyles),
    ...['height', 'padding', 'margin'].map(transition('ease', delay, duration))
  ].join(', ')
}

const to = (node) => {
  node.style.height = 0
  node.style.padding = 0
  node.style.margin = 0
}

const collapseTransition = (node, { delay, duration }) => {
  requestAnimationFrame(() => {
    from(node, delay, duration)
    requestAnimationFrame(() => to(node))
  })
}

const makeCollapseTransition = ({ transitionDuration, collapseDuration }) => {
  return (node) => {
    return collapseTransition(node, {
      delay: `${transitionDuration}ms`,
      duration: `${collapseDuration}ms`
    })
  }
}

export default makeCollapseTransition
