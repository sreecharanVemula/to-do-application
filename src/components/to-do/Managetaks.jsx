import React, { useState } from 'react'
import Addtask from './Addtask'
import Tasklist from './Tasklist'
import Taskscount from './Taskscount'

function Managetaks() {
    
    let[tasks,setTasks]=useState([])
  return (
    <div>
        <h1>To Do List</h1>
        <div className="row">
            <div className="col-sm-4 border p-4">
                <Addtask setTasks={setTasks} tasks={tasks}/>
            </div>
            <div className="col-sm-4 border p-4">
                <Tasklist tasks={tasks}/>
            </div>
            <div className="col-sm-4 border p-4">
                <Taskscount tasks={tasks}/>
            </div>
        </div>
    </div>
  )
}

export default Managetaks