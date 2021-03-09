import React from 'react'

const AddedNotesList = (props) => {
  return (
    <div className="container-fluid">

     <p>hello</p>
      <div className="row">
        {props.addedNotes.map((singleNote) => (
          <div className="single-note m-3 col">
            <h6>{singleNote.title}</h6>
            <p>{singleNote.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddedNotesList
