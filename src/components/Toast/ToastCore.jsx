import React from 'react'
import styled from 'styled-components'
import dismissIcon from './assets/dismiss.svg'

const Surface = styled.div`
  height: 6em;
  width: 20em;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0.125em 0.125em 0.25em #00000029;
  border-radius: 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1em;
  margin: 1em 2em;
  position: relative;
`

const DismissButton = styled.img`
  position: absolute;
  top: 1em;
  right: 1em;
  width: 1em;
  height: 1em;
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  width: 2em;
  height: 2em;
`

const Text = styled.p`
  line-height: 1.2em;
  color: ${({ fgColor }) => fgColor};
  margin-left: 1em;
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
