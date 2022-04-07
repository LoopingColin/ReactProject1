import React from 'react'

const Nav =()=> {
    return(
    <nav className='topNav'>
        <h1 className='h1 text-center'>Colin</h1>
        <p className='title'>Full Stacker</p>
        <p className='site'>colin.com</p>
        <div className='buttons d-flex justify-content-evenly'>
        <a className='btn btn-primary emailBtn' href='mailto:colinwerk@gmail.com'>Email</a>
        <a className='btn btn-primary linkedInBtn' href='mailto:colinwerk@gmail.com'>LinkedIn</a>
        </div>
    </nav> 
    )
}

export default Nav