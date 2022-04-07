import React from 'react'
import Main from './Main'

import Nav from './Nav'

const Header =()=> {
    return(
        <header className='header'>
                <img src='./1211.jpg' alt='placeholder img' className='img-fluid'/>
            <div className='container'>
                <Nav />
            </div>
        </header>
    )
}

export default Header