import React from "react";
import DeleteUser from "./DeleteUser";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import UsersTable from "./usersTable";
import UpdateUser from'./UpdateUser'
import UsersAdd from "./UsersAdd";
import './style/style.css'
function MangeRoute() {
  return (
    <>
      <BrowserRouter>
        <nav className="p-3 shadow-lg m-auto text-center">
          <NavLink className='linkNav text-decoration-none text-dark ' to="/">list users</NavLink>
          <NavLink className='linkNav text-decoration-none text-dark ' to="/user/create">create user</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<UsersTable />}></Route>
          <Route path="/user/create" element={<UsersAdd />}></Route>
          <Route path="/:username/:idUser/edit" element={<UpdateUser />}></Route>
          <Route path="/:username/:idUser/delete" element={<DeleteUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MangeRoute;
