import {useFormik} from 'formik';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {RootStateType} from "../../../redux/store";
import {sendPassRecoveryTC} from "../f-2-bll/forgotReducer";


export const RestorePassword = () => {

    const dispatch = useDispatch();
    const errorFromServer = useSelector<RootStateType, string | null>(state => state.restore.error)

    const formik = useFormik({

        initialValues: {
            email: '',
        },

        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },

        onSubmit: values => {
            formik.resetForm()
            dispatch(sendPassRecoveryTC(values.email))
        },
    })

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>Forgot password?</div>
                    <div><input
                        {...formik.getFieldProps('email')}
                    />
                    </div>
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>) : null}
                    {errorFromServer ? <span>{errorFromServer}</span> : null}
                    <button>Send instruction</button>
                    <div style={{textAlign: 'center'}}><NavLink to={'/login'}>Try logging in</NavLink></div>
                </div>
            </form>
        </div>
    );
}

type FormikErrorType = {
    email: string
}