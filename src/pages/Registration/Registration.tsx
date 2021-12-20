import React from "react";
import s from "./Registration.module.scss";
import SuperInputText from "../../components/common/SuperInputText/SuperInputText";
import SuperButton from "../../components/common/SuperButton/SuperButton";

export const Registration = () => {
    return (
        <div className={s.registrationBlock}>
            <form>
                <div className={s.title}>It-incubator</div>
                <div className={s.subtitle}>Sign Up</div>
                <div>
                    <SuperInputText placeholder="Email"/>
                </div>
                <div>
                    <SuperInputText placeholder="Password"/>
                </div>
                <div>
                    <SuperInputText placeholder="Confirm password"/>
                </div>
                <div className={s.blockBtn}>
                    <SuperButton>Cancel</SuperButton>
                    <SuperButton>Register</SuperButton>
                </div>
            </form>
        </div>
    );
}
