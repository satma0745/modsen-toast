import React from 'react'
import styled from 'styled-components'
import NotificationIcon from './icon.svg'

const Surface = styled.div`
  height: 181px;
  width: 668px;
  background: #f4e048 0% 0% no-repeat padding-box;
  box-shadow: 4px 4px 8px #00000029;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  margin: 35px 50px;
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  width: 64px;
  height: 64px;
`

const Text = styled.p`
  font-size: 32px;
  line-height: 38px;
  color: #000000;
  margin-left: 38px;
`

const Toast = ({ type, text }) => (
  <Surface>
    <Content>
      <Icon src={NotificationIcon} />
      <Text>
        {type}: {text}
      </Text>
    </Content>
  </Surface>
)

export default Toast
