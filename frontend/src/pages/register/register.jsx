import React from 'react'
import styles from './register.module.css'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link, Outlet, useLocation } from 'react-router-dom';

const schema = z.object({
    userName: z.string().min(3, { message: "User Name is required" }),
    name: z.string().min(3, { message: "Name is required" }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(3, { message: "Password is required" }),
})
function register() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
    const navigate = useNavigate();

    const onSubmit = (data) => {

        console.log(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://student.syncstaging.com/users/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const fethUsers = async () => {
            try {
                const res = await axios.request(config);
                // const userDataString = JSON.stringify(res.data);
                // sessionStorage.setItem('user', userDataString);
                // setUser(res.data)
                toast.success("Success " + `${res.data.message}`)
                navigate('/login');
            } catch (error) {
                if (error.response && error.response.data) {
                    const { error: errorMessage } = error.response.data;
                    toast.error("Error: " + errorMessage);
                  } else {
                    toast.error("An error occurred. Please try again later.");
                  }
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
                            Sign Up
                        </h4>
                        <p className='mb-0 text-center'>
                            Please enter your details
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row d-flex justify-content-center">
                            <div className="col-md-12 pt-3">
                                    <TextField id="name" label="Name" variant="outlined" className='w-100'
                                        {...register('name')} />
                                    {errors.name && <p className='text-danger'>{errors.name.message} </p>}

                                </div>
                                <div className="col-md-12 pt-3">
                                    <TextField id="email" label="Email" variant="outlined" className='w-100'
                                        {...register('email')} />
                                    {errors.email && <p className='text-danger'>{errors.email.message} </p>}

                                </div>
                                <div className="col-md-12 pt-3">
                                    <TextField id="userName" label="User Name" variant="outlined" className='w-100'
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
                                <Link to="/login">
                                    <p className='text-end m-0  text-secondary' style={{ cursor: "pointer", fontSize: "12px" }}>
                                        Already have an account? <span className='text-primary'>
                                            login
                                        </span>
                                    </p>
                                </Link>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default register