import React from 'react'

const AddSingleNote = () => {
  return (
    <div className="d-flex justify-content-center">
      <form action="#">
       <div  className="single-note d-flex flex-column m-3">
        <input type="text" name='title' placeholder='Title' className="p-2 mb-2 form"/>
        <textarea name="note" id="note" cols="30" rows="10" placeholder="Write a note..." className="p-2 mb-2"></textarea>
        <button type="submit" className="p-2 mb-2 btn btn-light">Create a note</button>
       </div>
      </form>
    </div>
  )
}

export default AddSingleNote