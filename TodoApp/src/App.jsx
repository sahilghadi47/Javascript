import React, { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./Components";
import { TaskProvider } from "./Contexts";



export default function App() {
  const [tasks, setTasks] =useState([]) 
  const AddTask = ( title ) => {
    setTasks((prevTasks) => [{id: Date.now() , ...title},...prevTasks])  
  }
  const DeleteTask = ( id ) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id  ))
  }
  const UpdateTask = ( id, title ) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? title : task))
  }
  const isComplete = ( id ) => {
    setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? {...task , completed: !task.completed}: task)) 
  }

  useEffect(() =>{
    const tasks =JSON.parse(localStorage.getItem('tasks'))
    if( tasks && tasks.length > 0){
      setTasks(tasks)
    }

  },[])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks))
  })

  return (
    <TaskProvider value={{tasks, AddTask, UpdateTask, DeleteTask , isComplete}}>

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Tasks</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {tasks.map((task) =>(
              <div key={task.id} className='w-full'>
                <TodoItem tasks ={task}/>
              </div>
            ))}

          </div>
        </div>
      </div>

    </TaskProvider>
  )
}