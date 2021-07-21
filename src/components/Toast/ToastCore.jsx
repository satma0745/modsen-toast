import React from 'react'
import styled from 'styled-components'
import dismissIcon from './assets/dismiss.svg'

const Surface = styled.div`
  height: 181px;
  width: 668px;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 4px 4px 8px #00000029;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  margin: 35px 50px;
  position: relative;
`

const DismissButton = styled.img`
  position: absolute;
  top: 27px;
  right: 29px;
  width: 32px;
  height: 32px;
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
  color: ${({ fgColor }) => fgColor};
  margin-left: 38px;
`

const ToastCore = ({ fgColor, bgColor, icon, text, dismiss, ...props }) => (
  <Surface bgColor={bgColor} {...props}>
    <Content>
      <Icon src={icon} />
      <Text fgColor={fgColor}>{text}</Text>
    </Content>

    <DismissButton src={dismissIcon} onClick={() => dismiss()} />
  </Surface>
)

export default ToastCore
