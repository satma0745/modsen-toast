import React from 'react'
import useNotifications from '../../data/useNotifications'
import ToastStack from '../../components/ToastStack'
import styled from 'styled-components'

const Article = styled.article`
  font-family: 'Helvetica', 'Arial', sans-serif;
`

const Page = () => {
  const [notifications, send] = useNotifications()

  return (
    <Article>
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
      </section>

      <section>
        <ToastStack notifications={notifications} />
      </section>
    </Article>
  )
}

export default Page
