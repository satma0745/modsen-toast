import React from 'react'
import useNotifications from './useNotifications'
import ToastStack from '../../components/ToastStack'

const Page = () => {
  const [notifications, notify] = useNotifications()

  return (
    <article>
      <section>
        <button onClick={() => notify('Info', 'Info toast example')}>
          Send info notification
        </button>

        <button onClick={() => notify('Warning', 'Warning toast example')}>
          Send warning notification
        </button>

        <button onClick={() => notify('Error', 'Error toast example')}>
          Send error notification
        </button>
      </section>

      <section>
        <ToastStack notifications={notifications} />
      </section>
    </article>
  )
}

export default Page
