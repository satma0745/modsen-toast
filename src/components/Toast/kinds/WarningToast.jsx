import React from 'react'
import ToastCore from '../ToastCore'
import WarningIcon from '../assets/warning.svg'

const WarningToast = ({ text, ...props }) => (
  <ToastCore
    fgColor='#000'
    bgColor='#F4E048'
    icon={WarningIcon}
    text={text}
    {...props}
  />
)

export default WarningToast
