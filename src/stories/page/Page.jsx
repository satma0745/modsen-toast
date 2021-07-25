import React from 'react'
import './styles.css'
import { addNotification as send } from '@data/notificationStore'
import ToastsStack from '@components/ToastsStack'

const Page = ({
  position,
  parentNode,
  edgeDistance,
  internalSpacing,
  ...props
}) => (
  <section {...props}>
    <button type="button" onClick={() => send('Info', 'Info toast example')}>
      Send info notification
    </button>

    <button
      type="button"
      onClick={() => send('Warning', 'Warning toast example')}
    >
      Send warning notification
    </button>

    <button type="button" onClick={() => send('Error', 'Error toast example')}>
      Send error notification
    </button>

    <button
      type="button"
      onClick={() => send('Success', 'Success toast example')}
    >
      Send success notification
    </button>

    <ToastsStack
      position={position}
      parentNode={parentNode}
      edgeDistance={edgeDistance}
      internalSpacing={internalSpacing}
    />
  </section>
)
export default Page
