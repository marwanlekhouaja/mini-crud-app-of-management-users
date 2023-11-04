import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from './userApp'

function DeleteUser() {
  const {idUser}=useParams()
  const {username}=useParams()
  const context=useContext(userContext)
  const user=context.users.filter((data)=>Number(data.id)===parseInt(idUser) && data.name === username)
  const del=()=>{
    const newData=context.users.filter((data)=>Number(data.id)!==parseInt(idUser))
    context.removeUser(newData)   
  }
  return (
    <>
    {user.length!==0?<div className="alert alert-danger p-3 container mt-3 justify-content-center d-flex align-items-center">
    <div>{user[0].name}! do you really want to delete your account ever !</div>
    <button className="btn btn-danger ms-3" onClick={del} >delete</button>
    </div>:''}
    </>
  )
}

export default DeleteUser