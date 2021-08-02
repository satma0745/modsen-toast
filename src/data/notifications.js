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

const sendNotification = (type, title, message) => {
  subscribers.forEach((notify) => notify({ type, title, message }))
}

export { sendNotification, subscribeToNotifications }
