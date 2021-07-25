import state from './state'
import generateId from './generateId'
import notifySubscribers from './notifySubscribers'
import removeNotification from './removeNotification'

const addNotification = (type, text) => {
  const notificationId = generateId()
  const notification = {
    id: notificationId,
    type,
    text,
    dismiss: () => removeNotification(notificationId)
  }

  state.notifications = [...state.notifications, notification]
  // setTimeout(() => notification.dismiss(), 3000)

  notifySubscribers()
}

export default addNotification
