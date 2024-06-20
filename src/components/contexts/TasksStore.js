import React, { useState } from 'react'
import { TaskList } from './TaskContext'
function TasksStore({children}) {
    let[tasks,setTasks]=useState([])
  return (
        <TaskList.Provider value={[tasks,setTasks]}>
            {children}
        </TaskList.Provider>
  )
}

export default TasksStore