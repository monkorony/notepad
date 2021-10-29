import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Notepad from './components/Notepad';
import AddNotePadForm from './components/AddNotePadForm';

function App() {
  const testData = [
    {
      id: uuidv4(), 
      notePadTitle: 'Notepad Title 1', 
      notes: [
        {id: uuidv4(), noteTitle: 'Notes Title 10', noteText: 'Notes Text 10'},
        {id: uuidv4(), noteTitle: 'Notes Title 20', noteText: 'Notes Text 20'},
        {id: uuidv4(), noteTitle: 'Notes Title 30', noteText: 'Notes Text 30'}
      ]
    }
  ]
  const [notePads, setNotePads] = useState(testData);

  //delete notepad
  const deleteNotePad = (id) => {
    //console.log(id);
    //map through notePads and delete id that matches
    const removeNotePads = notePads.filter(notePads => notePads.id !== id);
    setNotePads(removeNotePads);
  }

  //delete note
  const deleteNote = (notePadId, noteId) => {
    //map through notePad then notes and delete id that matches
    const newNotePads = notePads.map((notePad) => {
      if (notePad.id === notePadId) {
        //console.log(notePad, 'notePad');
        let removeNote = notePad.notes.filter(notes => notes.id !== noteId)
        //console.log(removeNote, 'removeNote');
        return {...notePad, notes: removeNote}
      }
      return notePad;
    });
    //console.log(newNotePads, 'note pads');
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
    //console.log(newNotes, 'newNotes');
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
    
    console.log(updateNotesTodo, 'updateNotes');
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
