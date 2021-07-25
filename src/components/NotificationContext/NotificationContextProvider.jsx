import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  addNotification,
  getNotifications,
  subscribe
} from '@data/notificationStore'

import NotificationContext from './NotificationContext'

const NotificationContextProvider = ({ stockNotifications, children }) => {
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
NotificationContextProvider.propTypes = {
  stockNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
NotificationContextProvider.defaultProps = {
  stockNotifications: []
}

export default NotificationContextProvider
