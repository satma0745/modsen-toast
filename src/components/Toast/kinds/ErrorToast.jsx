import React from 'react'
import ToastCore from '../ToastCore'
import ErrorIcon from '../assets/error.svg'

const ErrorToast = ({ text, ...props }) => (
  <ToastCore
    fgColor='#fff'
    bgColor='#E25837'
    icon={ErrorIcon}
    text={text}
    {...props}
  />
)

export default ErrorToast
