import './App.css';
import { useState } from 'react';
import NotepadForm from './components/NotepadForm';
import Notepad from './components/Notepad';

function App() {

  const testData = [
    {
      id: 1, 
      notePadTitle: 'Notepad Title 1', 
      notes: [
        {id: 1, noteTitle: 'Notes Title', noteText: 'Notes Text'},
        {id: 2, noteTitle: 'Notes Title', noteText: 'Notes Text'},
        {id: 3, noteTitle: 'Notes Title', noteText: 'Notes Text'}
      ]
    },
    {
      id: 2, 
      notePadTitle: 'Notepad Title 1', 
      notes: [
        {id: 1, noteTitle: 'Notes Title', noteText: 'Notes Text'}
      ]
    }
  ]
  const [notePads, setNotePads] = useState(testData);

  return (
    <div className='notepad-wrap'>
      <h1>NotePad Application</h1>
      <section className='notepad-container'>
        <div className='notepad-title-form-wrap'>
          <h6>Notepad Title</h6>
          
          {
            notePads.map((notePad) => (
              <Notepad 
                notePadId={notePad.id}
                notePadTitle={notePad.noteTitle}
                notes={notePad.notes}
                setNotePads={setNotePads}
              />
            ))
          }
        </div>
      </section>
    </div>
  );
}

export default App;
