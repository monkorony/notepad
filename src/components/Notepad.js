import React from 'react';
import NotepadForm from './NotepadForm';
import AddNoteForm from './AddNoteForm';
import Note from './Note';

const Notepad = ({
  notePadId,
  notePadTitle,
  notes,
  setNotePads,
  deleteNotePad,
  deleteNote,
  addNote
}) => {
  return (
    <div>
      <h6>Notepad Title</h6>
      <NotepadForm 
        deleteNotePad={deleteNotePad}
        notePadId={notePadId}
      />
      <h3>My Notes</h3>
      <AddNoteForm 
        notePadId={notePadId}
        notes={notes}
        addNote={addNote}
      />
      
      { notes.map((note) => (
          <Note 
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          notePadId={notePadId}
          />
        ))
      }
      <hr style={{margin: '20px'}} />
    </div>
  )
}

export default Notepad
