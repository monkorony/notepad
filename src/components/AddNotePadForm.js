import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddNotePadForm = ({
  addNotepad
}) => {

  const [notePadTitle, setNotepadTitle] = useState('');
  const [inputErr, setInputErr] = useState('');

  const handleNotepadTitleChange = (e) => {
    setNotepadTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      notePadTitle : notePadTitle,
      notes: []
    }
    //check for title
    if (notePadTitle !== '') {
      if (notePadTitle.length <= 255 ) {
        console.log(data, 'data')
        addNotepad(data);
        setInputErr('');
        setNotepadTitle('');
      }
    } else {
      setInputErr('Title is required (max characters 255)');
    }
  } 

  return (
    <div className='form-wrap notepad-form' style={{paddingBottom: '25px'}}>
      <form onSubmit={handleSubmit}>
        <div className='input-wrap'>
          <input 
            type="text" 
            name="title" 
            placeholder='My notepad title...'
            value={notePadTitle}
            onChange={handleNotepadTitleChange}
          />
        </div>
        <div className='btn-wrap'>
          <button className='add'>Add NotePad </button>
        </div>
      </form>
      <div style={{color: 'red'}}>{inputErr}</div>
    </div>
  )
}

export default AddNotePadForm
