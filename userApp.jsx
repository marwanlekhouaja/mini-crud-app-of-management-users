import React, { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import MangeRoute from './manageRoute'
export const userContext=createContext({
    users:[],
    id:[]
  })  
function UserApp() {
  
  const data=[
    // default data in order to test the operations ...
    {id:1,name:'marwan',age:18,country:'morrocco',gender:'men'},
    {id:2,name:'ali',age:23,country:'egybt',gender:'men'},
    {id:3,name:'maria',age:30,country:'algerie',gender:'women'}
  ]  
  const [users,setUsers]=useState(data)
  // add user
  const addUser=(infos)=>{
    setUsers(prevState=>[...prevState,infos.payload])
    window.history.back()
  }  
  // update user
  const updateUser = (newInfos) => {
    const id = newInfos.id;
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id === id) {
          return { ...user,
            name: newInfos.name,
            age:newInfos.age,
            gender:newInfos.gender==='men'?'men':'women',
            country:newInfos.country
           }; // Update the user's name
        }
        return user;
      })
    );
    window.history.back()
  };
  // delete user
  const deleteUser=(newInfo)=>{
    setUsers(newInfo)
    window.history.back()
  }
  return (
    <>
    <userContext.Provider value={{
        users:users,onAddUser:addUser,update:updateUser,removeUser:deleteUser
    }}>
       <MangeRoute/>
    </userContext.Provider>
     </>
  )
}


export default UserApp