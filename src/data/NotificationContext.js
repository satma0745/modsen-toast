import React, { useState, useEffect, createContext } from 'react'
import { getNotifications, subscribe } from './notificationStore'

const NotificationContext = createContext()

const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(getNotifications())
  useEffect(() => subscribe(setNotifications), [setNotifications])

  return (
    <NotificationContext.Provider value={notifications}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
export { NotificationContextProvider }
