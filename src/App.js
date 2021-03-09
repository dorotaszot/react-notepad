import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddSingleNote from './components/AddSingleNote';
import { useState } from 'react';
import AddedNotesList from './components/AddedNotesList';



function App() {
  const [inputs, setInputs] = useState({
    title: '',
    note: ''
  });  

  const [addedNotes, setAddedNotes] = useState([
    {
      title: 'Meeting',
      note: 'lorem lorem lroenerm efnmdf dfn dmfndnfdmfdmnf dm f'
    },
    {
      title: 'Shopping',
      note: 'sfkjs fksjfsdjflskjf sldkfj skdlfj dskfj dkf'
    },
    {
      title: 'thoughts on sth important',
      note: 'sdfsd sfd sd  s ff sf sd s s fsd sd fsf sd sd sd sd fs s ds ssfs fsd sdf dsf df'
    },
    {
      title: 'Meeting',
      note: 'lorem lorem lroenerm efnmdf dfn dmfndnfdmfdmnf dm f'
    },
    {
      title: 'Shopping',
      note: 'sfkjs fksjfsdjflskjf sldkfj skdlfj dskfj dkf'
    },
    {
      title: 'thoughts on sth important',
      note: 'sdfsd sfd sd  s ff sf sd s s fsd sd fsf sd sd sd sd fs s ds ssfs fsd sdf dsf df'
    }
  ]);
  
  const handleTitleInput = (event) => {
    setInputs({...inputs, title: event.target.value})
  }
 
  const handleNoteInput = (event) => {
    setInputs({...inputs, note: event.target.value})
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newNotes = {...addedNotes, title: inputs.title, note: inputs.note}
    setAddedNotes(newNotes);
  }
  console.log(addedNotes);
  

  return (
    <div>
      <div className="container">
        <AddSingleNote inputs={inputs} setInputs={setInputs} handleTitleInput={handleTitleInput} handleNoteInput={handleNoteInput} handleOnSubmit={handleOnSubmit}/>
      </div>
      <AddedNotesList addedNotes={addedNotes}/>
    </div>
    
  );
}

export default App;
