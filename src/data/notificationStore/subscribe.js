import state from './state'
import notifySubscribers from './notifySubscribers'

const subscribe = (notify) => {
  state.subscribers.push(notify)

  const unsubscribe = () => {
    const subIndex = state.subscribers.findIndex((sub) => sub === notify)

    if (subIndex !== -1) {
      state.subscribers.splice(subIndex, 1)
      notifySubscribers()
    }
  }
  return unsubscribe
}

export default subscribe
