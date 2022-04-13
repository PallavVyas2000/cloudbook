import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card text-dark bg-warning mb-3 my-2" style={{ width: "300px", height: "260px" }}>
                <div className="card-header">
                    <div class="row">
                        <div class="col align-self-start">
                            <strong>{note.title}</strong>
                        </div>
                        <div className="col align-self-end">
                            <div class="row">
                                <div className="d-flex flex-row-reverse">
                                    <div class="d-inline-flex">
                                        <i className="far fa-edit"></i>
                                        <i className="far fa-trash-alt"></i>
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