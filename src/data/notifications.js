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

const sendNotification = (notification) => {
  subscribers.forEach((notify) => notify(notification))
}

export { sendNotification, subscribeToNotifications }
