import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {removeUser} from '../store/slices/UserSlice'

const DisplayUsers = () => {
    const data = useSelector((state)=>{
        return state.users
    })

    const dispatch =useDispatch();

    const deleteSingleUser = (index) =>{
      dispatch(removeUser(index))

    }

    console.log("dataaa==>", data);


  return (
    <div className='m-3 p-3'>
      {
        data.map((value, index)=>{
          return <li key={index} >
            {value}
            <button onClick={()=>deleteSingleUser(index)} className='btn btn-secondary m-3 justifucontent-flexend display-flex'>delete </button>
          </li>
        })
      }

     

    </div>
  )
}

export default DisplayUsers