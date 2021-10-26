import React from 'react'

const NotepadForm = () => {
  return (
    <div className='form-wrap notepad-form'>
      <form>
        <div className='input-wrap'>
          <input 
            type="text" 
            name="title" 
            placeholder='My notepad title...' 
          />
        </div>
        <div className='btn-wrap'>
          <button className='save'>Save</button>
          <button className='delete'>Delete</button>
        </div>
      </form>
    </div>
  )
}

export default NotepadForm
