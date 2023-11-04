import React, { useContext, useEffect, useRef} from "react";
import { userContext } from "./userApp";
import { useParams } from "react-router-dom";

function UpdateUser() {
  const context = useContext(userContext);
  // partie get data from form
  const refName = useRef();
  const refAge = useRef();
  const refMen = useRef();
  const refWomen = useRef();
  const refCountry = useRef();
  // get parameter li ktji mn url  
  const { idUser } = useParams();
  const { username }= useParams()
  console.log(idUser);
  useEffect(() => {
    const user = context.users.filter(
      (user) => Number(user.id) === parseInt(idUser)&& user.name ===username
    );
    // const [currentData,setNewData]=useState(user[0])
    console.log(user);
    if (user.length !== 0) {
      refName.current.value = user[0].name;
      refAge.current.value = user[0].age;
      refCountry.current.value = user[0].country;
      user[0].gender === "men" ? (refMen.current.checked = true) : (refWomen.current.checked = true);
    }
    else{
      console.log('error')
    }
  }, []);
  const edit = () => {
    const userToUpdate = {
      id: parseInt(idUser),
      name: refName.current.value,
      age: refAge.current.value,
      country: refCountry.current.value,
      gender: refMen.current.checked ? "men" : "women",
    };
    context.update(userToUpdate);
    alert('update succefully !')
  };
  return (
    <>
      <form action="" className="container shadow-lg mt-3 mb-3 p-3">
        <h2>Edit user</h2>
        name : <br />
        <input
          type="text"
          ref={refName}
          className="form-control"
          placeholder="enter your name here "
        />
        age : <br />
        <input
          type="number"
          ref={refAge}
          className="form-control"
          placeholder="enter your age here "
        />
        <br />
        gender : <br />
        <input type="radio" ref={refMen} name="gender" className="mt-2" />
        <span className="me-3 ">Men</span>
        <input type="radio" ref={refWomen} name="gender" />
        <span>Women</span> <br />
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
        <button
          type="button"
          onClick={edit}
          className="w-100  mt-3 btn btn-success"
        >
          edit
        </button>
      </form>
    </>
  );
}

export default UpdateUser;
