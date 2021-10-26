import './App.css';
import { useState } from 'react';
import Notepad from './components/Notepad';

function App() {

  const testData = [
    {
      id: 1, 
      notePadTitle: 'Notepad Title 1', 
      notes: [
        {id: 10, noteTitle: 'Notes Title 10', noteText: 'Notes Text 10'},
        {id: 20, noteTitle: 'Notes Title 20', noteText: 'Notes Text 20'},
        {id: 30, noteTitle: 'Notes Title 30', noteText: 'Notes Text 30'}
      ]
    },
    {
      id: 2, 
      notePadTitle: 'Notepad Title 2', 
      notes: [
        {id: 100, noteTitle: 'Notes Title 100', noteText: 'Notes Text 100'}
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

  return (
    <div className='notepad-wrap'>
      <h1>NotePad Application</h1>
      <section className='notepad-container'>
        <div className='notepad-title-form-wrap'>
          {
            notePads.map((notePad) => (
              <Notepad 
                key={notePad.id}
                notePadId={notePad.id}
                notePadTitle={notePad.noteTitle}
                notes={notePad.notes}
                setNotePads={setNotePads}
                deleteNotePad={deleteNotePad}
                deleteNote={deleteNote}
              />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default App;
