import React from 'react'
import { ToastContainer } from 'react-toastify'

const ToastAlert = () => {
  return (
    <ToastContainer
      position="top-right"
      // autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    ></ToastContainer>
  )
}

export default ToastAlert