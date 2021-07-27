import React from 'react'
import { sendNotification } from '@data/notifications'
import './styles.css'

const Page = ({ children, ...props }) => (
  <section {...props}>
    <button
      type="button"
      onClick={() => sendNotification('Info', 'Info toast example')}
    >
      Send info notification
    </button>

    <button
      type="button"
      onClick={() => sendNotification('Warning', 'Warning toast example')}
    >
      Send warning notification
    </button>

    <button
      type="button"
      onClick={() => sendNotification('Error', 'Error toast example')}
    >
      Send error notification
    </button>

    <button
      type="button"
      onClick={() => sendNotification('Success', 'Success toast example')}
    >
      Send success notification
    </button>

    {children}
  </section>
)
export default Page
