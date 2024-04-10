import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import {nanoid} from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const[notes, setNotes] = useState([
    // id: nanoid(),
    // text: "This is my first note!",
    // Date: "14/08/2023",
  
]);

const [searchText, setSearchText] = useState('');

const [darkMode, setDarkMode] = useState(false);

const [updateNoteText, setUpdateNoteText] = useState('');
const [updateNoteId, setUpdateNoteId] = useState();

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
const deleteNote = (id) => {
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
};

const updateNote = (id) => {
  const updateNotes = notes.map((note) => {
    if (note.id === updateNoteId) {
      return {...note, text: updateNoteText}
    }
    return note;
  });
  setNotes(updateNotes);
  setUpdateNoteId(null);
  setUpdateNoteText('');
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
        handleUpdateNote = {(id, text) => {
          setUpdateNoteId(id)
          setUpdateNoteText(text)
        }}
        updateNoteId = {updateNoteId}
        updateNoteText = {updateNoteText}
        // truyền hàm updateNote xuống component con
        handleUpdate = {updateNote}
        />
      </div>
    </div>
    
  );
};

export default App;
