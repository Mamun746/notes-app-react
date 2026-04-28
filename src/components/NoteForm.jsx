import { useState } from "react";
import TextInput from './inputs/TextInput'
import SelectInput from "./inputs/SelectInput";

const NoteForm = ({notes,setNotes}) => {
    // const [title,setTitle]=useState('')
    // const [priority,setPriority]=useState('Medium')
    // const [category,setCategory]=useState('Work')
    // const [description,setDescription]=useState('')
    const [formdata,setFormData]=useState({
        title:'',
        priority:'Medium',
        category:'Work',
        description:''

    })
    const [isFormVisible,setIsFormVisible]=useState(false)
const handleChange=(e)=>{
   setFormData({
    ...formdata,
    [e.target.name]:e.target.value
   })

}
const handleSubmit=(e)=>{
    e.preventDefault()
    if(!formdata.title || !formdata.description) return;
    const newNote={id: Date.now(),...formdata}
    setNotes([newNote,...notes])
    setFormData({
        title:'',
        priority:'Medium',
        category:'Work',
        description:''

    })
    console.log(formdata);
    
}
    return (  
        <>
        <button className="w-full bg-gray-100 border border-gray-300 text-pink-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4" onClick={()=>setIsFormVisible(!isFormVisible)}>{isFormVisible?'Hide Note':'Add New Note'}</button>
        
        {isFormVisible&& <form onSubmit={handleSubmit} className="mb-6">
            {/* <div className="mb-4">
                <label htmlFor="title" className="block font-semibold">Title</label>
                <input name='title' type="text" className="w-full p-2 border rounded-lg " value={formdata.title} onChange={handleChange}/>

            </div> */}
            <TextInput label='Title' name='title' value={formdata.title} onChange={handleChange} required={true}/>
            {/* <div className="mb-4">
                <label htmlFor="title" className="block font-semibold">Priority</label>
                <select name="priority" type="text" className="w-full p-2 border rounded-lg " value={formdata.priority} onChange={handleChange}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

            </div> */}
            <SelectInput label='Priority' name={'priority'} value={formdata.priority} onChange={handleChange} options={[
                {value:'High',label:'High'},
                {value:'Medium',label:'Medium'},
                {value:'Low',label:'Low'}
            ]}/>
            {/* <div className="mb-4">
                <label htmlFor="title" className="block font-semibold">Category</label>
                <select name="category" type="text" className="w-full p-2 border rounded-lg " value={formdata.category} onChange={handleChange}> 
                <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Ideas">Ideas</option>
                </select>
            </div> */}
            <SelectInput label='Category' name={'category'} value={formdata.category} onChange={handleChange} options={[
                {value:'Work',label:'Work'},
                {value:'Personal',label:'Personal'},
                {value:'Ideas',label:'Ideas'}
            ]}/>
            <div className="mb-4">
                <label htmlFor="description" className="block font-semibold">Description</label>
                <textarea name="description" type="text" className="w-full p-2 border rounded-lg " value={formdata.description} onChange={handleChange}></textarea>

            </div>
            <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Notes</button>
        </form>}
        </>
    );
}
 
export default NoteForm;
