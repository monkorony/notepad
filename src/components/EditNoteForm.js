import React from 'react';
import { useState } from 'react';

const EditNoteForm = ({
  deleteNotePad,
  notePadId,
  editeNotepadTitle,
  notePadTitle,
  note,
  editNote
}) => {

  const [inputErr, setInputErr] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleNoteTitleChange = (e) => {
    setCurrentTitle(e.target.value);
  }
  const handleNoteTextChange = (e) => {
    setCurrentText(e.target.value);
  }
  //click save
  const clickSave = (e) => {
    e.preventDefault();
    const data = {
      noteTitle: currentTitle,
      noteText: currentText
    }
    //console.log(note, 'note');
    editNote(notePadId, note.id, data);
    setCurrentTitle('');
    setIsEditing(false);
  }

  //click edit 
  const clickEdit = (e) => {
    e.preventDefault();
    setCurrentText(note.noteText)
    setCurrentTitle(note.noteTitle);
    setIsEditing(true);
  }

  return (
    <div className='form-wrap notepad-form'>
      <form>
        <div className='input-wrap' >
          <input 
            type="text" 
            name="title" 
            placeholder={note.noteTitle} 
            value={currentTitle}
            onChange={handleNoteTitleChange}
            disabled={!isEditing ? 'disabled' : ''}
          /> <br />
          <textarea 
            type="text" 
            name="note" 
            placeholder={note.noteText} 
            value={currentText}
            onChange={handleNoteTextChange}
            rows="6"
            disabled={!isEditing ? 'disabled' : ''}
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
    </div>
  )
}

export default EditNoteForm
