import noteContext from "./NoteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
    const s1 = {
        "name" : "Pallav"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name" : "N3M0"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{ state, update }}>
            {props.children}
        </noteContext.Provider>
    );
}

export default NoteState;