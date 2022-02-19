import React, { useState } from 'react';
import { TextField, Button, Alert, Snackbar } from '@mui/material';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [notification, setNotification] = useState(null);
    const [open, setOpen] = React.useState(false);

    const onSubmit = data => {
        const email = data.email;
        const user = { email }
        fetch('https://secret-dawn-73150.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setNotification(true);
                    setOpen(true);
                }
                else {
                    setNotification(false);
                    setOpen(true);
                }
            })
        reset()
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>

            <div>
                <div className="fs-2 text-center">Make Admin With Email Address</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-auto d-flex flex-column' style={{ width: '80%' }}>
                    <TextField
                        {...register("email", { required: true })}
                        variant="outlined"
                        label="Email"
                        type="email"
                    />
                    {errors.email && <span style={{ width: '80%' }} className='text-danger d-flex mx-auto'>This email field is required</span>}

                    <div className='d-flex justify-content-end'>
                        <Button
                            className='mt-4 w-25 fw-bold button-design'
                            variant='contained'
                            type="submit"
                        >Make Admin</Button>
                    </div>
                </div>
            </form>
            {notification &&
                <Snackbar style={{ color: 'white' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} style={{ backgroundColor: "green", color: 'white' }} sx={{ width: '100%' }}>
                        Congratulation! Successfully Added Admin
                    </Alert>
                </Snackbar>
            }
            {!notification &&
                <Snackbar style={{ color: 'white' }} open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert style={{ backgroundColor: "red", color: 'white' }} severity="error">Please Provide Valid Email</Alert>
                </Snackbar>
            }
        </div>
    );
};

export default MakeAdmin;