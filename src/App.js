import React from 'react'
import Register from './components/Register/Register'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <Register />
      <ToastContainer />
    </>
  )
}

export default App
