import React, { useContext, useRef } from "react";
import { userContext } from "./userApp";

function UsersAdd() {
  // partie get data from form 
  const context=useContext(userContext)
  const refName=useRef() 
  const refAge=useRef()  
  const refMen=useRef()  
  const refWomen=useRef()  
  const refCountry=useRef()  
  
  const add=()=>{
    const saveData={
        id:Date.now(),
        name:refName.current.value,
        age:refAge.current.value,
        country:refCountry.current.value,
        gender:refMen.current.checked?'men':'women'
    }
    context.onAddUser({payload:saveData})
    alert('user create succefully')    
    refName.current.value=''
    refAge.current.value=''
    refCountry.current.value=''
    refMen.current.checked=false
    refWomen.current.checked=false

  }
  
  return (
    <>
      <form action="" className="container shadow-lg mt-3 mb-3 p-3">
        name : <br />
        <input type="text" ref={refName} className="form-control" placeholder="enter your name here " />
        age :  <br />
        <input type="number" ref={refAge} className="form-control" placeholder="enter your age here "/>
        <br />
        gender : <br />
        <input type="radio" ref={refMen} name="gender" className="mt-2" /><span className="me-3 ">Men</span>
        <input type="radio" ref={refWomen} name="gender" /><span>Women</span> <br />
        country : <br /> 
        <select ref={refCountry} className="form-select">
            <option value="">select your country !</option>
            <option value="morrocco">morrocco</option>
            <option value="egybt">egybt</option>
            <option value="algerie">algerie</option>
            <option value="Qatar">Qatar</option>
            <option value="italie">italie</option>
            <option value="spain">spain</option>
        </select>
        {/* <input type="button" onClick={add} className="w-100  mt-3 btn btn-primary" value='add user' /> */}
        <button type="button"  onClick={add} className="w-100  mt-3 btn btn-primary">add user</button>
      </form>
    </>
  );
}

export default UsersAdd;
