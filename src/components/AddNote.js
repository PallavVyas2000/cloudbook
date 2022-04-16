import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleOnClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        props.showAlert("Note Added", "success")
        setNote({ title: "", description: "", tag: "" })
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container my-3">
                <h1>Add a Note</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Note Title" value={note.title} onChange={onChange} minLength={3} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="description" name="description" rows="3" value={note.description} onChange={onChange} minLength={5} required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <textarea type="text" className="form-control" id="tag" name="tag" rows="1" value={note.tag} onChange={onChange} minLength={3} required></textarea>
                </div>

                <button type="button" disabled={note.title.length < 3 || note.description.length < 5} className="btn btn-primary" onClick={handleOnClick}>Add Note</button>
            </div>
        </>
    )
}

export default AddNote