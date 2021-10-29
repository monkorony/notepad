import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Notepad from './components/Notepad';
import AddNotePadForm from './components/AddNotePadForm';

function App() {

  const [notePads, setNotePads] = useState([]);

  //delete notepad
  const deleteNotePad = (id) => {
    //map through notePads and delete id that matches
    const removeNotePads = notePads.filter(notePads => notePads.id !== id);
    setNotePads(removeNotePads);
  }

  //delete note
  const deleteNote = (notePadId, noteId) => {
    //map through notePad then notes and delete id that matches
    const newNotePads = notePads.map((notePad) => {
      if (notePad.id === notePadId) {
        let removeNote = notePad.notes.filter(notes => notes.id !== noteId)
        return {...notePad, notes: removeNote}
      }
      return notePad;
    });
    setNotePads(newNotePads);
  }

  //add note
  const addNote = (notePadId, note) => {
    //map through notePad then notes and add new note
    const newNotes = notePads.map((notePad) => {
      if (notePad.id === notePadId) {
        //list of new notes for specific notepadid
        let notes = [...notePad.notes, note];
        //return updated notes
        return {...notePad, notes: notes}
      }
      return notePad;
    });
    setNotePads(newNotes);
  }

  //add Notepad
  const addNotepad = (notepad) => {
    setNotePads([...notePads, notepad]);
  }

  //edit Notepad Title
  const editeNotepadTitle = (id, title) => {
    const updateNotepad = notePads.map((notePad) => {
      return notePad.id === id ? {...notePad, notePadTitle: title} : notePad
    });
    setNotePads(updateNotepad);
  }

  //edit Notes
  const editNote = (notepadId, noteId, note) => {
    const updateNotesTodo = notePads.map((notePad) => {
      if (notePad.id === notepadId) {
        let updateNotes = notePad.notes.map((noteItem) => {
          return noteItem.id === noteId ? {...noteItem, noteText: note.noteText, noteTitle: note.noteTitle } : noteItem
        });
        return {...notePad, notes: updateNotes}

      }
      return notePad;
    });
    setNotePads(updateNotesTodo);
  }

  return (
    <div className='notepad-wrap'>
      <h1>NotePad Application</h1>
      <AddNotePadForm 
        addNotepad={addNotepad}
      />
      <section className='notepad-container'>
        <div className='notepad-title-form-wrap'>
          {
            notePads.map((notePad) => (
              <Notepad 
                key={notePad.id}
                notePadId={notePad.id}
                notePadTitle={notePad.notePadTitle}
                notes={notePad.notes}
                setNotePads={setNotePads}
                deleteNotePad={deleteNotePad}
                deleteNote={deleteNote}
                addNote={addNote}
                editeNotepadTitle={editeNotepadTitle}
                editNote={editNote}
              />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default App;
