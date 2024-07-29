import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
import './index.css'

function Home() {
  const [task, setTask] = useState("")
  const handleSave = () => {
    axios.post("http://localhost:3001/add", {task:task})
    .then(result => {
      console.log(result)
      setTask("")
    })
    .catch(err => console.log("error"))
  }
  return (
    <div className='home'>
        <h1>NOTES</h1>
        <div>
            <input type='text' value={task} placeholder='Enter a Note' onChange={(e) => setTask(e.target.value)} />
            <button type='button' onClick={handleSave}>SAVE</button>
        </div>
        <Link to="/noteslist">
        <button type='button'>List Of Notes</button>
        </Link>

    </div>
  )
}

export default Home