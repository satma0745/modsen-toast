import React from 'react'
import styled from 'styled-components'

import Toast from '../Toast'
import { useNotifications } from '../../data'

const flexDirection = (direction) => {
  switch (direction) {
    case 'top-down':
      return 'column'
    case 'down-top':
      return 'column-reverse'
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => flexDirection(direction)};
  padding: 1em;
`

const ToastStack = ({ direction = 'top-down', ...props }) => {
  const [notifications] = useNotifications()

  return (
    <Container direction={direction} {...props}>
      {notifications.map(({ id, type, text, dismiss }) => (
        <Toast key={id} type={type} text={text} dismiss={() => dismiss()} />
      ))}
    </Container>
  )
}

export default ToastStack
