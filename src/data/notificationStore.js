import generateId from './generateId'

const state = {
  notifications: [],
  subscribers: []
}

const addNotification = (type, text) => {
  const notificationId = generateId()
  const notification = {
    id: notificationId,
    type,
    text,
    dismiss: () => removeNotification(notificationId)
  }

  state.notifications = [...state.notifications, notification]
  notifySubscribers()
}

const removeNotification = (notificationId) => {
  state.notifications = state.notifications.filter(
    (notification) => notification.id !== notificationId
  )

  notifySubscribers()
}

const getNotifications = () => {
  return state.notifications
}

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

const notifySubscribers = () => {
  state.subscribers.forEach((notify) => notify(state.notifications))
}

export { getNotifications, addNotification, subscribe }
