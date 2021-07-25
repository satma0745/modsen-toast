import { useContext } from 'react'

import NotificationContext from '@components/NotificationContext'
import { addNotification as sendNotification } from '@data/notificationStore'

const useNotifications = () => {
  const notifications = useContext(NotificationContext)
  return [notifications, sendNotification]
}

export default useNotifications
