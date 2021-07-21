import { useContext } from 'react'
import NotificationContext from './NotificationContext'
import { addNotification } from './notificationStore'

const useNotifications = () => {
  const notifications = useContext(NotificationContext)
  return [notifications, addNotification]
}

export default useNotifications
