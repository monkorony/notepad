import React from 'react'

const Note = ({
  note
}) => {
  return (
    <div>
      Title: {note.noteTitle}<br />
      Note text: {note.noteText}
      <br />
      <button className='delete'>Delete</button>
    </div>
  )
}

export default Note
