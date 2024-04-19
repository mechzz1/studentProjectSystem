import React , { useState} from 'react'
import styles from './login.module.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const schema = z.object({
    userName: z.string().min(3, { message: "User Name is required" }),
    password: z.string().min(3, { message: "Password is required" }),
})
function login() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
    const onSubmit = (data) => {

        console.log(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:13000/users/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const fethUsers = async () => {
            try {
                const res = await axios.request(config);
                const userDataString = JSON.stringify(res.data);
                sessionStorage.setItem('user', userDataString);
                setUser(res.data)
                toast.success("Success " + `${res.data.message}`)
                navigate('/dashboard/projects');
            } catch (error) {
                toast.error("Error " + `${error}`)
            }
        }

        fethUsers();
    };
    return (

        <>
            <div className={` ${styles.secBg}`}>
                <div className={styles.midCon}>
                    <div className="container p-5">
                        <h4 className='text-center'>
                            Log in
                        </h4>
                        <p className='mb-0 text-center'>
                            Please enter your details
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-12 pt-3">
                                    <TextField id="userName" label="UserName" variant="outlined" className='w-100'
                                        {...register('userName')} />
                                    {errors.userName && <p className='text-danger'>{errors.userName.message} </p>}

                                </div>
                                <div className="col-md-12 pt-3">
                                    <TextField id="password" label="Password" variant="outlined" type="password" className='w-100'
                                        {...register('password')} />
                                    {errors.password && <p className='text-danger'>{errors.password.message} </p>}
                                </div>
                              
                                <div className="col-md-12 d-flex justify-content-center pt-2">
                                    <Button variant="contained" type="submit" className='w-100 p-2' >Login</Button>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center pt-4">
                                    <p className='text-end m-0  text-secondary' style={{cursor:"pointer", fontSize:"12px"}}>
                                        Not register yet? <span className='text-primary'>
                                            Create an account
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default login