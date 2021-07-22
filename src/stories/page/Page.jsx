import React from 'react'
import './styles.css'
import { addNotification as send } from '../../data/notificationStore'
import ToastsStack from '../../components/ToastsStack'

const Page = ({ toastsPosition, ...props }) => (
  <section {...props}>
    <button onClick={() => send('Info', 'Info toast example')}>
      Send info notification
    </button>

    <button onClick={() => send('Warning', 'Warning toast example')}>
      Send warning notification
    </button>

    <button onClick={() => send('Error', 'Error toast example')}>
      Send error notification
    </button>

    <button onClick={() => send('Success', 'Success toast example')}>
      Send success notification
    </button>

    <ToastsStack position={toastsPosition} />
  </section>
)
export default Page
