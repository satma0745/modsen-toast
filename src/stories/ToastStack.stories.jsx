import React from 'react'
import ToastStack from '../components/ToastStack'

export default {
  title: 'Components/ToastStack',
  component: ToastStack
}

const Template = (args) => <ToastStack {...args} />

export const StuffedToastStack = Template.bind({})
StuffedToastStack.args = {
  notifications: [
    { id: '104f', type: 'Info', text: 'Info toast example' },
    { id: '4f43', type: 'Warning', text: 'Warning toast example' },
    { id: '1e2f', type: 'Error', text: 'Error toast example' }
  ]
}
