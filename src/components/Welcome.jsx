import { useState } from 'react'
import '../styles/style.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


export const Welcome = () => {

    const [typewriter] = useTypewriter({
        words: ['hello my name is Angel Mugracci, and i`m ',
            'web developer', 'software development student', 'front-end developer'],
        typeSpeed: 130,
        deleteSpeed: 60,
        loop: true

    })


    return (
        <>
            <div className="buttons">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="container-write">

                <span>{typewriter}</span>
                <Cursor cursorColor='white' cursorStyle='_' />
            </div>
        </>
    )
}
