import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Login() {
    const [user, setUser] = useState({
        username : '',
        password : ''
    })
    const { username, password } = user;
    function changeHandler(e) {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    function submitHandler(e) {
        e.preventDefault();
        console.log(user);
        setUser({username : '', password : ''})
    }
  return (
    <>
    <hr />
        <div className='d-flex justify-content-around pt-4'>
            <div class="card" style={{width: '40rem'}}>
                <img src="https://res.cloudinary.com/dbie5v8ke/image/upload/v1696695939/WhatsApp_Image_2023-10-07_at_9.53.45_PM_rvlhqy.jpg" className="card-img-top" alt="loading!" />   
            </div>
            <div className="card mt-5 pt-5 border border-0" style={{width: '40%'}}>
                <div className="card-body">
                <form onSubmit={submitHandler}>
                    <Stack spacing={2}>
                        <Stack spacing={1}>
                            <Typography variant='h4' className='fw-bolder' style={{ letterSpacing : '3px'}}>Log in to Exclusive</Typography>
                            <Typography variant='subtitle2' className='fw-bold'>Enter your details below</Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <TextField label='Email or Phone Number' variant='standard' name='username' value={username} onChange={changeHandler} />
                            <TextField label='Password' variant='standard' name='password' value={password} onChange={changeHandler} />
                        </Stack>
                        <Stack display='block'>
                            <Button variant='contained' type='submit' color='error' className='px-4 py-2'>Log In</Button>
                            <Typography style={{ float : 'right'}} color='error' variant='h6'>Forgot Password ?</Typography>
                        </Stack>
                    </Stack>
                </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
