import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-700 p-4 text-white text-center text-5xl'>
      User : {userid}
    </div>
  )
}

export default User
