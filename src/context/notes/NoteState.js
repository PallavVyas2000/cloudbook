import noteContext from "./NoteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "6250bd1482e5bffhrfsgdcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bdr1482e5bffdcdgsd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd148sh2e5bffdcdd12dh1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd14r82e5bfhwfdcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
            "user": "6250b244ad4c5687d2a50702",
            "title": "First Note",
            "description": "Hey pallav",
            "tag": "testing app",
            "date": "2022-04-08T22:54:12.304Z",
            "__v": 0
        },
        {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
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
        console.log("Adding a new note")
        const note = {
            "_id": "6250bd1482e5bffdeeeeeeewcdd12d1d",
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
    const deleteNote = () => {

    }

    // Edit a note
    const editNote = () => {

    }
    return (
        <noteContext.Provider value={{notes, addNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;