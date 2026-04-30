import { useState,useEffect, use } from 'react';
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
const App = () => {
  const [notes,setNotes]=useState(()=>{
    const savedNotes=JSON.parse(localStorage.getItem('notes'))
    return savedNotes ? savedNotes : []
  })
  const deleteNote=(id)=>{
    console.log('id',id);
    
    setNotes(notes.filter((note)=>note.id !==id))
  }
  useEffect(()=>{
   localStorage.setItem('notes',JSON.stringify(notes))
  },[notes])
  return ( 
  <>
  <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
   <h2 className="text-2xl font-bold mb-4 text-center"> My Notes App</h2>
   <NoteForm notes={notes} setNotes={setNotes}/>
   <NoteList notes={notes} deleteNote={deleteNote}/>
    </div>
    
  </> 
  );
}
 
export default App;