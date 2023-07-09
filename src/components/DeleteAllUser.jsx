import React from 'react'
import { useDispatch } from 'react-redux'
import {clearAllUsers} from '../store/slices/UserSlice'


const DeleteAllUser = () => {
  const dispatch = useDispatch()

  const deleteAllUser = () =>{

    dispatch(clearAllUsers())

  }
  return (
    <div>
        <button onClick={()=>deleteAllUser()} className='btn btn-danger'>DELETE ALL USERS</button>
    </div>
  )
}

export default DeleteAllUser