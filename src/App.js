import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import {nanoid} from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const[notes, setNotes] = useState([]);

const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
  );

  if(savedNotes){
    setNotes(savedNotes);
  }
}, []);

useEffect (()=> {
  localStorage.setItem(
    'react-notes-app-data',
     JSON.stringify(notes)
     );
}, [notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
    // Date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

const cloneNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}
const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
};

const updateNote = (id, updatedText) => {
  const updatedNote = notes.map((note) => {
    if (note.id === id) 
     return {
      id: note.id,
      text: updatedText,
      date: note.date
    }
    else return note
  })
  setNotes(updatedNote)
}
  return (
    <div className={`${darkMode ? "dark-mode" : ""}`}>
      <div className="container">
    <Header handleToggleDarkMode = {setDarkMode} />
    <Search handleSearchNote = {setSearchText} />
    <NotesList 
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText)
          )}
        handleAddNote={addNote} 
        handleDeleteNote = {deleteNote}
        updateNote = {updateNote}
        cloneNote = {cloneNote}
        
        />
      </div>
    </div>
    
  );
};

export default App;
