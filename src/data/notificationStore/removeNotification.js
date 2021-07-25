import state from './state'
import notifySubscribers from './notifySubscribers'

const removeNotification = (notificationId) => {
  state.notifications = state.notifications.filter(
    (notification) => notification.id !== notificationId
  )

  notifySubscribers()
}

export default removeNotification
