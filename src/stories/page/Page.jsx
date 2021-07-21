import React from 'react'
import useNotifications from '../../data/useNotifications'
import ToastStack from '../../components/ToastStack'

const Page = () => {
  const [notifications, send] = useNotifications()

  return (
    <article>
      <section>
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
      </section>

      <section>
        <ToastStack notifications={notifications} />
      </section>
    </article>
  )
}

export default Page
