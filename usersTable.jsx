import React, { useContext } from 'react'
import { userContext } from './userApp'
import { Link } from 'react-router-dom'
function UsersTable() {
  const context=useContext(userContext)  
  return (
    <>
    
    <table className='shadow-lg container m-auto  mt-4 text-center table table-light'>
    <thead>
        <tr>
            <th>id user</th>
            <th>name</th>
            <th>age</th>
            <th>country</th>
            <th>gender</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {context.users.length!==0?context.users.map((user)=>(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.country}</td>
                <td>{user.gender}</td>
                <td>
                    <button className='btn btn-danger w-75'><Link className='text-decoration-none text-light ' to={`${user.name}/${user.id}/delete`}>delete</Link></button>
                </td>
                <td><button className='btn btn-success w-75'><Link className='text-decoration-none text-light' to={`${user.name}/${user.id}/edit`} >edit</Link></button></td>
            </tr>
        )):<tr className='text-center'><td  colSpan="7" className="text-center">no users in the right now</td></tr>}
    </tbody>
    </table>
    
    </>
  )
}

export default UsersTable