import React from 'react'

const Note = ({
  note,
  deleteNote,
  notePadId
}) => {
  return (
    <div>
      Title: {note.noteTitle}<br />
      Note text: {note.noteText}
      <br />
      <button onClick={() => deleteNote(notePadId, note.id)} className='delete'>Delete</button>
    </div>
  )
}

export default Note
