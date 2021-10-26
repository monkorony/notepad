import React from 'react';
import NotepadForm from './NotepadForm';
import AddNoteForm from './AddNoteForm';
import Note from './Note';

const Notepad = ({
  notePadId,
  notePadTitle,
  notes,
  setNotePads,
  deleteNotePad
}) => {
  return (
    <div>
      <NotepadForm 
        deleteNotePad={deleteNotePad}
        notePadId={notePadId}
      />
      <h3>My Notes</h3>
      <AddNoteForm />
      <hr style={{margin: '20px'}} />
      { notes.map((note) => (
          <Note 
          key={note.id}
          note={note}
          />
        ))
      }
    </div>
  )
}

export default Notepad
