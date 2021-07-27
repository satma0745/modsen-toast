const subscribers = []

const subscribeToNotifications = (notifyCallback) => {
  subscribers.push(notifyCallback)

  const unsubscribe = () => {
    const indexToRemove = subscribers.indexOf(notifyCallback)
    if (indexToRemove !== -1) {
      subscribers.splice(indexToRemove, 1)
    }
  }
  return unsubscribe
}

const sendNotification = (type, text) => {
  subscribers.forEach((notify) => notify({ type, text }))
}

export { sendNotification, subscribeToNotifications }
