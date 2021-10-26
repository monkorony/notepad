import React from 'react'

const AddNoteForm = () => {
  return (
    <div className='form-wrap' style={{margin: '20px auto'}}>
      <form>
        <div className='input-wrap'>
          <input 
            type="text" 
            name="title" 
            placeholder='Enter note title...' 
          />
          <br />
          <textarea 
            type="text" 
            name="note" 
            placeholder='Enter note ...' 
          />
        </div>
        <div className='btn-wrap'>
          <button className='add'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddNoteForm
