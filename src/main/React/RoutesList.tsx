import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Test } from '../../pages/Test/Test'
import { Login } from '../../pages/Login/Login'
import { NewPassword } from '../../pages/NewPassword/NewPassword'
import { Profile } from '../../pages/Profile/Profile'
import { Registration } from '../../pages/Registration/Registration'
import { BadRequest } from '../../pages/404/404'
import { PacksList } from '../../pages/PacksList/PacksList'
import { RestorePassword } from '../../pages/RestorePassword/f-1-ui/RestorePassword'
import Packs from '../../pages/Packs/Packs'
import Cards from '../../pages/Cards/Cards'


const RoutesList = () => {
    return (
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Registration/>}/>
            <Route path={'/newPassword'} element={<NewPassword/>}/>
            <Route path={'/passwordRecovery'} element={<RestorePassword/>}/>
            {/* <Route path={'/packs'} element={<Packs/>}/> */}
            <Route path={'/packsList'} element={<PacksList/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/test'} element={<Test/>}/>
            <Route path={'/packs'} element={<Packs/>}/>
            <Route path={'/cards'} element={<Cards/>}/>
            <Route path='*' element={<BadRequest/>}/>
        </Routes>
    )
}

export default RoutesList;