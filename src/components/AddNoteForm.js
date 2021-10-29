import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddNoteForm = ({
  notePadId,
  notes,
  addNote
}) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [inputErr, setInputErr] = useState('');

  const handleNoteTitleChange = (e) => {
    setNoteTitle(e.target.value);
  }
  const handleNoteTextChange = (e) => {
    setNoteText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //check for title and text
    if (noteTitle !== '' && noteText !== '') {
      if (noteTitle.length <= 255 && noteText.length <= 1000 ) {
        addNote(notePadId, {id: uuidv4(), noteTitle: noteTitle, noteText: noteText});
        setInputErr('');
        setNoteText('');
        setNoteTitle('');
      }
    } else {
      setInputErr('Title is required (max characters 255) and text is required (max characters 1000)');
    }
  } 
  return (
    <div className='form-wrap' style={{margin: '20px auto'}}>
      <form onSubmit={handleSubmit}>
        <div className='input-wrap'>
          <input 
            type="text" 
            name="title" 
            placeholder='Enter note title...'
            value={noteTitle}
            onChange={handleNoteTitleChange}
          />
          <br />
          <textarea 
            type="text" 
            name="note" 
            placeholder='Enter note ...' 
            value={noteText}
            onChange={handleNoteTextChange}
            rows="6"
          />
        </div>
        <div style={{color: 'red'}}>{inputErr}</div>
        <div className='btn-wrap'>
          <button className='add'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddNoteForm
