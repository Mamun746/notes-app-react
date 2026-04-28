const NoteList = ({notes,deleteNote}) => {
    if(notes.length===0){
        return(
            <p className="text-center text-gray-500">No Notes yet</p>
        )
    }
    return ( 
        <div className="space-y-4">
            {
            notes.map((note)=>(
                <div key={note.id} className="p-4 bg-white rounded-lg shadow-lg border-l-4" style={{ borderLeftColor: `${note.priority==='High'?'red':note.priority==='Medium'?'yellow':'green'}` }}>
                    <h3 className="text-lg font-bold">{note.title}</h3>
                    <p className="text-sm text-gray-600"><strong>Category: </strong>{note.category}</p>
                    <p className="text-sm text-gray-600"><strong>Priority: </strong>{note.priority}</p>
                    <p className="mt-2">{note.description}</p>

                    <button className="bg-red-400 text-white py-1 my-2 px-2 rounded-lg cursor-pointer hover:bg-red-500" onClick={()=>deleteNote(note.id)}>Delete Note</button>
                </div>
            ))
        }
        </div>
     );
}
 
export default NoteList;