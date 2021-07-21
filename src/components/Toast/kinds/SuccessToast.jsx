import React from 'react'
import ToastCore from '../ToastCore'
import SuccessIcon from '../assets/success.svg'

const SuccessToast = ({ text, ...props }) => (
  <ToastCore
    fgColor='#fff'
    bgColor='#37E29A'
    icon={SuccessIcon}
    text={text}
    {...props}
  />
)

export default SuccessToast
