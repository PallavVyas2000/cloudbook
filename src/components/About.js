import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
    const a = useContext(NoteContext)
    useEffect(()=>{
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            This is made by 
        </div>
    );
}

export default About
