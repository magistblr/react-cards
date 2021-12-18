import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Test } from '../../../pages/Test/Test'
import { Login } from '../../../pages/Login/Login'
import { NewPassword } from '../../../pages/NewPassword/NewPassword'
import { Profile } from '../../../pages/Profile/Profile'
import { Registration } from '../../../pages/Registration/Registration'
import './App.css';
import {RestorePassword} from "../../../pages/RestorePassword/f-1-ui/RestorePassword";


export const App = () => {
  return (
      <Routes>
          <Route path='/'  element={<Profile/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="restore_password" element={<RestorePassword/>}/>
          <Route path="new_password" element={<NewPassword/>}/>
          <Route path="test" element={<Test/>}/>
          <Route path="*" element={<h1>404: PAGE NOT FOUND</h1>} />
      </Routes>
  );
}
