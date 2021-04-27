import React from 'react'
import { ToastDiv, ToastPrimary } from '../styles/toasts'
const Toast = ({ toastMessage, toastVersion }) => {
  return (
    <ToastDiv>
      <ToastPrimary toastVersion={toastVersion}>
        <b>{toastMessage}</b>
      </ToastPrimary>
    </ToastDiv>
  )
}

export default Toast
