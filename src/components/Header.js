import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
 import { InputAdornment, TextField } from '@mui/material'

function Header() {
  return (
    <div>
      <div className='header-alignment'>
        <p>Summer Sale For All Swim Suits And Free Updated Delivery OFF 50%! <Link className='primary' to='#'>ShopNow</Link></p>
        <span>
            <select name='language'>
                <option value='enlish'>English</option>
                <option value='telugu'>Telugu</option>
                <option value='hindi'>Hindi</option>
            </select>
        </span>
      </div>
      <div className='navBar-alignment pt-4 pb-0 mb-0'>
        <h6 className='m-0 pt-3'>Ashustores <span id='dot'>.</span></h6>
        <nav className='pt-3'>
            <Link to='/home'>Home</Link>
            <Link to='/contacts'>Contact</Link>
            <Link to='/About'>About</Link>
            <Link to='/Sign Up'>Sign Up</Link>
        </nav>
        <div id='border' className='p-0 m-0'> 
            <TextField type='text' variant='outlined' label='What are you looking for?' size='small' InputProps={{
              endAdornment : <InputAdornment position='end'>{<SearchIcon />}</InputAdornment>
            }} />
        </div>
      </div>
    </div>
  )
}

export default Header
