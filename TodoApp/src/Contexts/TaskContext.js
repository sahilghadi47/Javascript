
import React ,{createContext ,useContext} from "react";

export const TaskContext = createContext({
    tasks:[
        {
            id:1,
            title:'task',
            completed: false
        }

    ],
    AddTask: ( title ) => {},
    DeleteTask: ( id )=> {},
    UpdateTask: ( id, title ) => {},
    isComplete: ( id ) => {}

})

export const TaskProvider =TaskContext.Provider  

export const useTask = () => {
    return useContext(TaskContext)
}
