import React, {useState} from "react";
import s from "./Registration.module.scss";
import SuperInputText from "../../components/SuperInputText/SuperInputText";
import SuperButton from "../../components/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {addUserTC} from "../../redux/reducers/registrationReducer";
import {StateType} from "../../redux/store";
import { Navigate } from "react-router-dom";

export const Registration = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const isRegistered = useSelector<StateType, boolean>(state => state.registrationPage.isRegistered);

    const changeEmail = (value: string) => {
        setEmail(value);
    };
    
    const changePassword = (value: string) => {
        setPassword(value);
    };
    
    const addUser = () => {
        dispatch(addUserTC({email, password}));
    };

    if(isRegistered) {
        return <Navigate to="/login"/>
    }

    return (
        <div className={s.registrationBlock}>
            <form>
                <div className={"title"}>It-incubator</div>
                <div className={"subtitle"}>Sign Up</div>
                <div className={"formControl formGroupInput"}>
                    <SuperInputText onChangeText={changeEmail} id="email"/>
                    <label className={"labelInput"} htmlFor="email">Email</label>
                </div>
                <div className={"formControl formGroupInput"}>
                    <SuperInputText onChangeText={changePassword} id="password"/>
                    <label className={"labelInput"} htmlFor="password">Password</label>
                </div>
                <div className={"formControl formGroupInput"}>
                    <SuperInputText id="confirmPassword"/>
                    <label className={"labelInput"} htmlFor="confirmPassword">Confirm password</label>
                </div>
                <div className={s.blockBtn}>
                    <SuperButton type="reset" className={"lightBtn"}>Cancel</SuperButton>
                    <SuperButton onClick={addUser} type="submit" className={"primaryBtn"}>Register</SuperButton>
                </div>
            </form>
        </div>
    );
};
