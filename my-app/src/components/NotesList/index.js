import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate  } from "react-router-dom"
import './index.css'

function NotesList() {
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3001/get")
        .then(result => setNotes(result.data))
        .catch(error => console.log(error))
    }, [])

    const handleDelete = id => {
        axios.delete("http://localhost:3001/delete/"+id)
        .then(result => {
            setNotes(notes.filter(note => note._id !== id));
        })
        .catch(error => console.log(error))      
    }

    const goBack = () => {
        navigate('/'); // Navigate to the home page
    };

     return (
        <div className="home">
            <h1>Notes List</h1>
            {
                notes.length === 0 ? <div><h2>No Notes</h2></div> : 
                notes.map(note => (
                    <div>
                        <ul>
                            <li className="task">
                                <p>{note.task}</p>
                                <span><button onClick={() => handleDelete(note._id)}>DELETE</button></span>                                
                            </li>
                        </ul>
                    </div>
                ))
            }
            <button onClick={goBack}>Back</button>
        </div>
    )
}

export default NotesList