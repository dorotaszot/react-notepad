import React from 'react';

const AddSingleNote = (props) => {
  return (
    <div className="d-flex justify-content-start container">
      <form action="#" onSubmit={props.handleOnSubmit}>
       <div  className="single-note d-flex flex-column m-3">
        <input 
          type="text" name='noteTitle' 
          placeholder='Title' 
          className="p-2 mb-2 form" 
          value={props.inputs.title}
          onChange={props.handleTitleInput}/>
        <textarea 
          name="noteText" id="noteText" 
          cols="10" rows="7" 
          placeholder="Write a note..." 
          className="p-2 mb-2" 
          value={props.inputs.note}
          onChange={props.handleNoteInput}>
        </textarea>
        <button type="submit" className="p-2 mb-2 btn btn-light">Create a note</button>
       </div>
      </form>
    </div>
  )
}



export default AddSingleNote