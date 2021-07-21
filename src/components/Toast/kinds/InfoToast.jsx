import React from 'react'
import ToastCore from '../ToastCore'
import InfoIcon from '../assets/info.svg'

const InfoToast = ({ text, ...props }) => (
  <ToastCore
    fgColor='#fff'
    bgColor='#9A40D3'
    icon={InfoIcon}
    text={text}
    {...props}
  />
)

export default InfoToast
