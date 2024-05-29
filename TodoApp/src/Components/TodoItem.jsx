import React, { useState } from 'react';
import { useTask } from '../Contexts';

function TodoItem({ tasks }) {
    
    const [isTaskEditable,setisTaskEditable] = useState(false)
    const [msg,setmsg] = useState(tasks.title)
    const {UpdateTask , DeleteTask, isComplete} = useTask()

    const editTask =() =>{
        
        UpdateTask(tasks.id,{... tasks , title: msg})
        setisTaskEditable(false)

    }

    const isCompleted = () =>{
        isComplete(tasks.id)
    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                tasks.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={tasks.completed}
                onChange={isCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTaskEditable ? "border-black/10 px-2" : "border-transparent"
                } ${tasks.completed ? "line-through" : ""}`}
                value={msg}
                onChange={(e) => setmsg(e.target.value)}
                readOnly={!isTaskEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (tasks.completed) return;

                    if (isTaskEditable) {
                        editTask();
                    } else setisTaskEditable((prev) => !prev);
                }}
                disabled={tasks.completed}
            >
                {isTaskEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => DeleteTask(tasks.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;