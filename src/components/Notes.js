import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addNote } = context;
    return (
        <>
        <AddNote/>
        <div className="row my-3">
            <div className="heading my-3">
                <h1>Your Notes</h1>
            </div>
            {notes.map((note) => {
                return <NoteItem key={note._id} note={note} />;
            })}
        </div>
        </>
    )
}

export default Notes
