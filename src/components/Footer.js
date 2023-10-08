import { Typography } from '@mui/material'
import React from 'react'
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='bg-dark text-light p-5 pb-1 mt-5'>
    <div className='d-flex justify-content-around'>
      <div>
        <Typography variant='subtitle1' className='fw-bold mb-2'>Exclusive</Typography>
        <Typography variant='subtitle2' className='fw-bold mb-3'>Subscribe</Typography>
        <Typography variant='subtitle2' className='mb-3' id='fontSize'>Get 10% off first order</Typography>
          <span className='border border-2 p-2'>Enter your email <SendTwoToneIcon /></span> 
      </div>
      <div>
        <Typography variant='subtitle1' className='fw-bold mb-2 ps-3 ms-3'>Support</Typography>
        <ul>
          <li>111 Bijay sarani,Dhaka</li>
          <li className='pb-2'>DH 1515, Bangladesh</li>
          <li className='pb-3'>exclusive@gmail.com</li>
          <li className='pb-2'>+88015-88888-9999</li>    
        </ul>
      </div>
      <div>
      <Typography variant='subtitle1' className='fw-bold mb-2 ps-3 ms-3'>Account</Typography>
      <ul className='paddingBtm'>
        <li>My Account</li>
        <li >Login / Register</li>
        <li>Cart</li>
        <li>Whishlist</li>
        <li>Shop</li>
      </ul>
      </div>
      <div>
      <Typography variant='subtitle1' className='fw-bold mb-2 ps-3 ms-3'>Quick Link</Typography>
      <ul className='paddingBtm'>
        <li>Privacy policy</li>
        <li>Terms Of Use</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
      </div>
      <div>
        <Typography variant='subtitle1' className='fw-bold mb-2 ps-3 ms-2'>Download App</Typography>
        <p>save $3 with App New User Only</p>
        <img className='alignImage pt-0 ms-3' src='https://res.cloudinary.com/dbie5v8ke/image/upload/v1696695928/WhatsApp_Image_2023-10-07_at_9.54.30_PM_jnpftv.jpg' alt='...' />
        <div className='d-flex justify-content-evenly mt-4'>
          <FacebookIcon />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
    </div>
    <footer>
      <b><span>&copy;</span> Copyright rimel 2022 all right reserved</b>
    </footer>
    </div>
  )
}
export default Footer
