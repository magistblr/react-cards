import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Test } from '../../pages/Test/Test'
import { Login } from '../../pages/Login/Login'
import { NewPassword } from '../../pages/NewPassword/NewPassword'
import { Profile } from '../../pages/Profile/Profile'
import { Registration } from '../../pages/Registration/Registration'
import { RestorePassword } from '../../pages/RestorePassword/RestorePassword'
import { BadRequest } from '../../pages/404/404'


const RoutesList = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Registration/>}/>
            <Route path={'/newPassword'} element={<NewPassword/>}/>
            <Route path={'/passwordRecovery'} element={<RestorePassword/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/test'} element={<Test/>}/>
            <Route path='*' element={<BadRequest/>}/>
        </Routes>
    )
}

export default RoutesList;