import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddSingleNote from './components/AddSingleNote';
import { useState } from 'react';



function App() {
  const [inputs, setInputs] = useState({
    title: '',
    note: ''
  });  
  
  const handleTitleInput = (event) => {
    setInputs({...inputs, title: event.target.value})
  }
 
  const handleNoteInput = (event) => {
    setInputs({...inputs, note: event.target.value})
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
   <AddSingleNote inputs={inputs} setInputs={setInputs} handleTitleInput={handleTitleInput} handleNoteInput={handleNoteInput} handleOnSubmit={handleOnSubmit}/>
  );
}

export default App;
