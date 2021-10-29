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
  addNote,
  editeNotepadTitle,
  editNote
}) => {
  return (
    <div>
      <h6>Notepad Title: {notePadTitle}</h6>
      <NotepadForm 
        deleteNotePad={deleteNotePad}
        notePadId={notePadId}
        editeNotepadTitle={editeNotepadTitle}
        notePadTitle={notePadTitle}
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
          editNote={editNote}
          />
        ))
      }
      <hr style={{margin: '20px'}} />
    </div>
  )
}

export default Notepad
