import React from 'react';
import { useState } from 'react';

const NotepadForm = ({
  deleteNotePad,
  notePadId,
  editeNotepadTitle,
  notePadTitle
}) => {

  const [title, setTitle] = useState('');
  const [inputErr, setInputErr] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleNoteTitleChange = (e) => {
    setCurrentTitle(e.target.value);
  }

  //click delete
  const clickDelete = (e) => {
    e.preventDefault();
    deleteNotePad(notePadId);
  }

  //click save
  const clickSave = (e) => {
    e.preventDefault();
    editeNotepadTitle(notePadId, currentTitle);
    setCurrentTitle('');
    setIsEditing(false);
  }

  //click edit 
  const clickEdit = (e) => {
    e.preventDefault();
    setCurrentTitle(notePadTitle);
    setIsEditing(true);
  }

  return (
    <div className='form-wrap notepad-form'>
      <form >
        <div className='input-wrap' style={isEditing ? {display: 'block'} : {display: 'none'}}>
          <input 
            type="text" 
            name="title" 
            placeholder='My notepad title...' 
            value={currentTitle}
            onChange={handleNoteTitleChange}
          />
        </div>
        <div className='btn-wrap'>
          <button 
            className='edit' 
            onClick={clickEdit} 
            style={!isEditing ? {display: 'block'} : {display: 'none'}}
            >
              Edit
          </button>
          <button 
            onClick={clickSave} 
            className='save' 
            style={isEditing ? {display: 'block'} : {display: 'none'}}
          >
            Save
          </button>
        </div>
      </form>
      <div className='btn-wrap'>
        <button onClick={clickDelete} className='delete'>Delete Notepad</button>
      </div>
      
    </div>
  )
}

export default NotepadForm
