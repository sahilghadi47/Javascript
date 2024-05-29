import React, { useState } from 'react';
import { useTask } from '../Contexts';

function TodoForm() {
    
    const [title, setTitle] = useState('')
    const { AddTask } =  useTask()
    const add = (e)=>{
        e.preventDefault()
        if(!title) {
            
            alert("Task cannot be empty")
            return
        }

        AddTask({ title , completed: false})
        setTitle('')
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;