import React from 'react'

const Main =()=> {
    return (
        <main className='main container'>
            <section className='section'>
            <h2 className='h2 aboutH2'>About</h2>
            <p className='text aboutText'>Colin is a Junior Developer</p>
            </section>
            <section className='section'>
                <h2 className='h2 interests'>Interests</h2>
                <p className='text interestsText'>Outside of Coding</p>
            </section>
            <section className='section'>
                <h2 className='h2 stuff'>Stuff I Can Do</h2>
                <ul className='stuffList list-group'>
                    <li className='stuff-item list-group-item'>HTML/CSS</li>
                    <li className='stuff-item list-group-item'>Javascript</li>
                    <li className='stuff-item list-group-item'>Python</li>
                    <li className='stuff-item list-group-item'>PHP</li>
                    <li className='stuff-item list-group-item'>SQL</li>
                    <li className='stuff-item list-group-item'>Node.js & Express</li>
                    <li className='stuff-item list-group-item'>React</li>
                </ul>
            </section>
        </main>
    )
}

export default Main