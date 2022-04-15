import noteContext from "./NoteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
    const host = "https://cloudbook.vercel.app"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

        //Get all note
        const getNotes = async () => {
            // API Call
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MGIyNDRhZDRjNTY4N2QyYTUwNzAyIn0sImlhdCI6MTY0OTQ1NTkwNH0.SPIdg_4dsDZ5id8w7VOLHDnYciD2TpPZQaVGfawtv6k'
                },
            });
            const json = await response.json()
            setNotes(json)
        }

    //Add a note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MGIyNDRhZDRjNTY4N2QyYTUwNzAyIn0sImlhdCI6MTY0OTQ1NTkwNH0.SPIdg_4dsDZ5id8w7VOLHDnYciD2TpPZQaVGfawtv6k'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();

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
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MGIyNDRhZDRjNTY4N2QyYTUwNzAyIn0sImlhdCI6MTY0OTQ1NTkwNH0.SPIdg_4dsDZ5id8w7VOLHDnYciD2TpPZQaVGfawtv6k'
            }
        });   
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MGIyNDRhZDRjNTY4N2QyYTUwNzAyIn0sImlhdCI6MTY0OTQ1NTkwNH0.SPIdg_4dsDZ5id8w7VOLHDnYciD2TpPZQaVGfawtv6k'
            },
            body: JSON.stringify({title, description, tag})
        });   

    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if (element._id === id) {
            element.title = title;
            element.description = description;
            element.tag = tag;
        }
    }
}
return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
        {props.children}
    </noteContext.Provider>
)
}

export default NoteState;