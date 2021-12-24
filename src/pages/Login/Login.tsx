import React, {ChangeEvent, useState} from "react";
import s from './Login.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {ErrorLogin, LoginTC, OpenCloseEyeAC} from "../../redux/reducers/loginReducer";

import {Navigate, NavLink} from "react-router-dom";
import {RootStateType} from "../../redux/store";
import OpenCloseEye from "../../components/features/OpenEye/OpenCloseEye";
import Preloader from "../../components/features/Preloader/Preloader";

export const Login = () => {
    // let data = {
    //     email :"nya-admin@nya.nya",
    //     password :"1qazxcvBG",
    //     rememberMe : false
    // }
    const dispatch = useDispatch()
    let status = useSelector<RootStateType, string>(state => state.login.status)
    let IsLogin = useSelector<RootStateType, boolean>(state => state.login.isLogin)
    let openCloseEye = useSelector<RootStateType, boolean>(state => state.login.openCloseEye)
    let errorLogin = useSelector<RootStateType, boolean>(state => state.login.errorLogin)
    let errorLoginText = useSelector<RootStateType, string>(state => state.login.errorTextFromResponse)
    let [titleEmail, setTitleEmail] = useState('')
    let [titlePassword, setTitlePassword] = useState('')
    let [titleRememberMe, setTitleRememberMe] = useState(false)
    const changeTitleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleEmail(e.currentTarget.value)
    }
    const changeTitlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setTitlePassword(e.currentTarget.value)
    }
    const changeCheckboxRememberMe = (e: ChangeEvent<HTMLInputElement>) => {
        setTitleRememberMe(e.currentTarget.checked)
    }
    const click = () => {
        dispatch(LoginTC(titleEmail, titlePassword, titleRememberMe))
    }
    const funOpenCloseEye = () => {
        !openCloseEye ? dispatch(OpenCloseEyeAC(true)) : dispatch(OpenCloseEyeAC(false))
    }
    if (IsLogin) {
        return <Navigate to={"/profile"}/>
    }
    const removeTheErrorFromTheLogin = () => {
        dispatch(ErrorLogin(false))
    }
    return <>
        {status === "loading" ? <Preloader/>
            : <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.title}>
                        <h1> It-Incubator</h1>
                        <h3>Sign In</h3>
                    </div>
                    <form action="#" className={s.stylesForTheform}>
                        <div className={s.emailFieldItems}>
                            <label className={errorLogin ? s.erorrLogin : ''}
                                   htmlFor="emailField">{errorLogin ? 'Error' : 'Email'}</label>
                            <input onClick={() => errorLogin && removeTheErrorFromTheLogin()} value={titleEmail}
                                   onChange={changeTitleEmail} id={"emailField"}
                                   type="email"
                                   className={s.emailField}/>
                        </div>
                        <div className={s.passFieldItems}>
                            <label className={errorLogin ? s.erorrLogin : ''}
                                   htmlFor="passField">{errorLogin ? errorLoginText : 'Password'}</label>
                            <input onClick={() => errorLogin && removeTheErrorFromTheLogin()} value={titlePassword}
                                   onChange={changeTitlePassword} id={"passField"}
                                   type={openCloseEye ? 'password' : 'text'}
                                   className={s.passField}/>
                            <OpenCloseEye/>
                        </div>
                        <div className={s.checkbox}><input
                            onChange={changeCheckboxRememberMe}
                            type="checkbox"/> Remember Me
                        </div>
                    </form>
                    <NavLink to={'/forgot-my-password'} className={s.forgotPass}>Forgot Password</NavLink>
                    <div className={s.footer}>
                        <button onClick={() => click()} className={s.LoginButton}>Login</button>
                        <div className={s.switchingToAcc}>Don't have an account?</div>
                        <NavLink to={'/registration'} className={s.toSignUp}>Sign Up</NavLink>
                    </div>
                </div>
            </div>
        }
    </>
}

export default Login