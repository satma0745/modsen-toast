import state from './state'

const notifySubscribers = () => {
  state.subscribers.forEach((notify) => notify(state.notifications))
}

export default notifySubscribers
