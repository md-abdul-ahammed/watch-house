import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button, Alert, Snackbar } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from "react-router";
import './login.css';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [open, setOpen] = React.useState(false);
    const { loginUser, loading, user, signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();



    const onSubmit = data => {
        loginUser(data.email, data.password, location, history);
        setOpen(true);
        reset()
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
        setOpen(true);
    }

    // confirmation alert 
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
        <>
            <Navigation></Navigation>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className='py-5 shadow rounded'>
                            <h3 className='text-center pb-4'>Login</h3>
                            {!loading && <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    style={{ width: '80%' }}
                                    className='mt-4 d-flex mx-auto'
                                    {...register("email", { required: true })}
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Email"
                                    type="email"
                                    error={errors.email}
                                />
                                {errors.email && <span style={{ width: '80%' }} className='text-danger d-flex mx-auto'>This email field is required</span>}
                                <TextField
                                    style={{ width: '80%' }}
                                    className='mt-4 d-flex mx-auto'
                                    {...register("password", { required: true })}
                                    id="outlined-basic"
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                    error={errors.password}
                                />
                                {errors.password && <span style={{ width: '80%' }} className='text-danger d-flex mx-auto'>This password field is required</span>}

                                <Button style={{ width: '80%' }}
                                    className='mt-4 button-design fw-bold mb-2 d-flex mx-auto'
                                    variant='contained'
                                    type="submit"
                                >Login</Button>
                                <small style={{ width: '80%' }} className='d-flex mx-auto'> Are you new member? Please,  <NavLink className='ms-2 fw-bold' to='/register'> Register</NavLink></small>
                                <div className='mt-3 d-flex flex-column align-items-center justify-content-center'>
                                    <small className='fw-bold'><span className='primary-c-color fw-bold me-1'>NOTE:</span>Are you want to login as a admin ?</small>
                                    <small className='fw-bold '>Username: <span className='text-primary'>admin@admin.com</span></small>
                                    <small className='fw-bold '>Password: <span className='text-primary'>123456</span></small>
                                </div>
                            </form>}
                            {/* spinner loading add here */}
                            {loading && <div style={{ width: "70px", height: '70px' }} className="spinner-border d-flex mx-auto text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>}
                            <div className='d-flex justify-content-center fw-bold my-2'>------------------------------------------  Or  ------------------------------------------</div>
                            <div className='d-flex justify-content-around py-2'>
                                <Button className='button-design fw-bold' onClick={handleGoogleSignIn} variant='contained'><GoogleIcon sx={{ mr: 2 }} />Google Sing In</Button>

                                {/* <Button variant='contained'>Github Sing IN</Button> */}
                            </div>
                            {/* confirm user login notification add here */}
                            {user?.email &&
                                <Snackbar style={{ color: 'white' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} style={{ backgroundColor: "green", color: 'white' }} sx={{ width: '100%' }}>
                                        Login Successfully
                                    </Alert>
                                </Snackbar>
                            }
                            {authError &&
                                <Snackbar style={{ color: 'white' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert style={{ backgroundColor: "red", color: 'white' }} severity="error">{authError}</Alert>
                                </Snackbar>
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src="https://i.ibb.co/NFgd9jf/4957136.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;