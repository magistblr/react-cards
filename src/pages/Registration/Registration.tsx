import React, {useState} from "react";
import s from "./Registration.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {createUserTC, RequestStatusType} from "../../redux/reducers/registrationReducer";
import {RootStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";
import SuperInputText from "../../components/common/SuperInputText/SuperInputText";
import SuperButton from "../../components/common/SuperButton/SuperButton";
import {IsSamePassword} from "../../utils/samePassword";

export const Registration = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errorIsSamePassword, setIsSamePassword] = useState<string>("");
    const isRegistered = useSelector<RootStateType, boolean>(state => state.registrationPage.isRegistered);
    const error = useSelector<RootStateType, string>(state => state.registrationPage.error);

    const status = useSelector<RootStateType, string>((state) => state.registrationPage.status);

    const changeEmail = (value: string) => {
        setEmail(value);
    };
    
    const changePassword = (value: string) => {
        setPassword(value);
    };

    const changeConfirmPassword = (value: string) => {
        setConfirmPassword(value);
    };
    
    const createUser = () => {
        const isSamePassword = IsSamePassword(password, confirmPassword);

        if (!isSamePassword) {
            return setIsSamePassword("password must be same");
        }

        dispatch(createUserTC({email, password}));
    };

    if (isRegistered) {
        return <Navigate to="/login"/>
    }

    return (
        <div className={s.registrationBlock}>
            <form>
                <div className={"title"}>It-incubator</div>
                <div className={"subtitle"}>Sign Up</div>
                <div className={"formControl formGroupInput"}>
                    <SuperInputText onChangeText={changeEmail} error={error} id="email"/>
                    <label className={"labelInput"} htmlFor="email">Email</label>
                </div>
                <div className={"formControl formGroupInput"}>
                    <SuperInputText onChangeText={changePassword} error={error} id="password"/>
                    <label className={"labelInput"} htmlFor="password">Password</label>
                </div>
                <div className={"formControl formGroupInput"}>
                    <SuperInputText onChangeText={changeConfirmPassword} error={errorIsSamePassword} id="confirmPassword"/>
                    <label className={"labelInput"} htmlFor="confirmPassword">Confirm password</label>
                </div>
                <div className={s.blockBtn}>
                    <SuperButton type="reset" className={"lightBtn"}>Cancel</SuperButton>
                    <SuperButton onClick={createUser} disabled={status === 'loading'} type="submit" className={"primaryBtn"}>Register</SuperButton>
                </div>
            </form>
        </div>
    );
};
