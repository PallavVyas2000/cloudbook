import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card text-dark mb-3 my-2" style={{ width: "300px", height: "260px" }}>
                <div className="card-header">
                    <div className="row">
                        <div className="col align-self-start">
                            <strong>{note.title}</strong>
                        </div>
                        <div className="col align-self-end">
                            <div className="row">
                                <div className="d-flex flex-row-reverse">
                                    <div className="d-inline-flex editico">
                                        <i className="far fa-edit" onClick={() => {updateNote(note)}}></i>
                                    </div>
                                    <div className="d-inline-flex deleteico">
                                        <i className="far fa-trash-alt" onClick={() => {props.showAlert("Note Deleted", "success");deleteNote(note._id)}}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{note.description}</h5>
                </div>

            </div>
        </div>
    )
}

export default NoteItem