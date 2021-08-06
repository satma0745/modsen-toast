const transition = (timingFunction, delay, duration) => {
  return (property) => {
    return `${property} ${duration} ${timingFunction} ${delay}`
  }
}

const from = (node, delay, duration) => {
  node.style.height = window.getComputedStyle(node, null).height

  const initialTransition = window.getComputedStyle(node, null).transition
  const transitionProps = ['height', 'padding', 'margin']

  node.style.transition = [
    initialTransition,
    ...transitionProps.map(transition('ease', delay, duration))
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
