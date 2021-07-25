import React from 'react'
import './styles.css'
import { sendNotification } from '@data/notifications'

const Page = ({ children, ...props }) => (
  <section {...props}>
    <button
      type="button"
      onClick={() =>
        sendNotification({ type: 'Info', text: 'Info toast example' })
      }
    >
      Send info notification
    </button>

    <button
      type="button"
      onClick={() =>
        sendNotification({ type: 'Warning', text: 'Warning toast example' })
      }
    >
      Send warning notification
    </button>

    <button
      type="button"
      onClick={() =>
        sendNotification({ type: 'Error', text: 'Error toast example' })
      }
    >
      Send error notification
    </button>

    <button
      type="button"
      onClick={() =>
        sendNotification({ type: 'Success', text: 'Success toast example' })
      }
    >
      Send success notification
    </button>

    {children}
  </section>
)
export default Page
