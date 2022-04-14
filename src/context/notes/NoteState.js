import noteContext from "./NoteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6250bd1482e5gdfhbffhrfsgdcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bdr1482e5bffdcbdgsd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    //Add a note
    const addNote = (title, description, tag) => {
        console.log("note added")
        const note = {
            "_id": "6250bd1482e5bffdeessgeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a note
    const deleteNote = (id) => {
        console.log("note deleted")
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }

    // Edit a note
    const editNote = (id, title, description, tag) => {

    }
    return (
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;