import React, { useState, useEffect, createContext } from 'react'
import {
  addNotification,
  getNotifications,
  subscribe
} from './notificationStore'

const NotificationContext = createContext()

const NotificationContextProvider = ({ stockNotifications = [], children }) => {
  const [notifications, setNotifications] = useState(getNotifications())
  useEffect(() => subscribe(setNotifications), [setNotifications])

  useEffect(() => {
    stockNotifications.forEach(({ type, text }) => addNotification(type, text))
  }, [stockNotifications])

  return (
    <NotificationContext.Provider value={notifications}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
export { NotificationContextProvider }
