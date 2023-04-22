import React, {useContext} from 'react';
import TextField from "../fields/textField";
import useInput from "../../hooks/useInput";
import s from './index.module.css'
import Button from "../button";
import {AuthContext} from "../../context/authContextProvider";

const Login = () => {

    const initialValues = {
        email:'',
        password:''
    }
    const validatedSchema = {
        email:{
            email:true,
            required:'required field',
            notValid:'ara validuri veli',
        },
        password:{
            required:'required field password',
        }
    }

    const {value,handleChange,handleFocus,handleBlur,error} = useInput(initialValues,validatedSchema)

    const {handleAuthenticate} = useContext(AuthContext)


    return (
        <div className={s.wrapper}>
            <div className={s.inputWrapper}>
                <div className={s.inputs}>
                    <TextField
                        value={value.email}
                        onChange={handleChange}
                        onFocus = {handleFocus}
                        onBlur = {handleBlur}
                        placeholder = {'E-mail'}
                        error = {error.email?.hasError && error.email?.message}
                        style = {{marginBottom:'10px'}}
                        name = {'email'}
                    />
                    <TextField
                        value={value.password}
                        onChange={handleChange}
                        onBlur = {handleBlur}
                        onFocus = {handleFocus}
                        placeholder = {'Password'}
                        name = {'password'}
                        error = {error.password?.hasError && error.password?.message}
                        style = {{marginBottom:'10px'}}
                    />
                </div>
                <div>
                    <Button onClick = {handleAuthenticate}>
                        LOG IN
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default Login;
