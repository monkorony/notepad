import React from 'react';
import EditNoteForm from './EditNoteForm';

const Note = ({
  note,
  deleteNote,
  notePadId,
  editNote
}) => {
  return (
    <div>      
      <EditNoteForm 
        note={note}
        editNote={editNote}
        notePadId={notePadId}
      />
      <button onClick={() => deleteNote(notePadId, note.id)} className='delete'>Delete</button>
    </div>
  )
}

export default Note
