import React from "react";
import s from "./Registration.module.scss";
import SuperInputText from "../../components/SuperInputText/SuperInputText";
import SuperButton from "../../components/SuperButton/SuperButton";

export const Registration = () => {
    return (
        <div className={s.registrationBlock}>
            <form>
                <div className={"title"}>It-incubator</div>
                <div className={"subtitle"}>Sign Up</div>
                <div className={"formControl formGroupInput"}>
                    <SuperInputText id="email"/>
                    <label className={"labelInput"} htmlFor="email">Email</label>
                </div>
                <div className={"formControl formGroupInput"}>
                    <SuperInputText id="password"/>
                    <label className={"labelInput"} htmlFor="password">Password</label>
                </div>
                <div className={"formControl formGroupInput"}>
                    <SuperInputText id="confirmPassword"/>
                    <label className={"labelInput"} htmlFor="confirmPassword">Password</label>
                </div>
                <div className={s.blockBtn}>
                    <SuperButton className={"lightBtn"}>Cancel</SuperButton>
                    <SuperButton className={"primaryBtn"}>Register</SuperButton>
                </div>
            </form>
        </div>
    );
}
