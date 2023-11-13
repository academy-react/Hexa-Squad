import React from 'react'
import { removeItem } from '../../core/services/local-storage/storage.services'

const logOut = () => {
    const clickHandler = () => {
        removeItem('token');
        window.location.pathname ='/'
    }
  return (
    <div onClick={clickHandler} className='my-1 text-black '>logOut</div>
  )
}

export default logOut