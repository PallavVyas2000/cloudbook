import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate("/login")
        }
    }, [])

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    const handleOnClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("Note Updated", "success")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const ref = useRef(null)
    const refClose = useRef(null)

    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* text boxes in modal */}
                            <div className="mb-3">
                                <label htmlFor="etitle" className="form-label">Title</label>
                                <input type="text" className="form-control" minLength={3} required id="etitle" name="etitle" value={note.etitle} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edescription" className="form-label">Description</label>
                                <textarea type="text" className="form-control" minLength={5} required id="edescription" name="edescription" rows="3" value={note.edescription} onChange={onChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="etag" className="form-label">Tag</label>
                                <textarea type="text" className="form-control" id="etag" name="etag" value={note.etag} rows="1" onChange={onChange}></textarea>
                            </div>
                            {/*  */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length < 3 || note.edescription.length < 5} onClick={handleOnClick} className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="yournotes">
                <div className="row my-3">
                    <div className="heading my-3">
                        <h1>Your Notes</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <h3 className="nonotes">
                            {notes.length === 0 && "No Notes to display."}
                        </h3>
                    </div>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />;
                    })}
                </div>
            </div>
            <div className="footer">
            </div>
        </>
    )
}

export default Notes
