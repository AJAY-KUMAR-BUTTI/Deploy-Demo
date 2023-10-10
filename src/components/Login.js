import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Login() {
    const [fields, setfields] = useState({
        fieldusername : '',
        fieldemail : '',
        fieldpassword : ''
    })
    const [user, setUser] = useState({
        username : '',
        password : '',
        name : ''
    })
    const { username, name, password } = user;
    function changeHandler(e) {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }
    function submitHandler(e) {
        e.preventDefault();
        console.log(user);
        alert(`user ${username} ${name} and ${password}`)
        setUser({username : '', name : '', password : ''})
    }
  return (
    <>
    <hr />
        <div className='d-flex justify-content-around pt-4'>
            <div className="card" style={{width: '40rem'}}>
                <img src="https://res.cloudinary.com/dbie5v8ke/image/upload/v1696695939/WhatsApp_Image_2023-10-07_at_9.53.45_PM_rvlhqy.jpg" className="card-img-top" alt="loading!" />   
            </div>
            <div className="card mt-5 pt-5 border border-0" style={{width: '40%'}}>
                <div className="card-body">
                <form onSubmit={submitHandler}>
                    <Stack spacing={2}>
                        <Stack spacing={1}>
                            <Typography variant='h5' className='fw-bolder' style={{ letterSpacing : '1px'}}>Create an account</Typography>
                            <Typography variant='subtitle2' className='fw-bold'>Enter your details below</Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <TextField label='name' variant='standard' value={username}  name='username' onChange={changeHandler} />
                            <TextField label='Email or Phone Number' variant='standard' name='name' value={name} onChange={changeHandler} />
                            <TextField label='Password' variant='standard' name='password' value={password} onChange={changeHandler} />
                        </Stack>
                        <Stack spacing={2} className='mt-4 pt-2'>
                            <Button variant='contained' type='submit' id='color'>Create an account</Button>
                            <button> <span><img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png' alt='...' /></span>Sign up with Google</button>
                        </Stack>
                        <Stack spacing={2} direction='row' className='ps-5 ms-5'>
                            <Typography variant='subtitle1' className='pt-1'>Already have account ?</Typography>
                            <Button variant='text' className='text-dark'>Login</Button>
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
