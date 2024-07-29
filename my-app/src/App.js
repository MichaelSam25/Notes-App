import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './components/Home'
import NotesList from './components/NotesList'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/noteslist' element={<NotesList />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
