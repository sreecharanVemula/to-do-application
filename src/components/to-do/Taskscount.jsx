import React from 'react'
import { useContext } from 'react'
import { TaskList } from '../contexts/TaskContext'
function Taskscount(props) {
  let[tasks,setTasks]=useContext(TaskList)
  return (
    <div>
        <h3 className='lead fs-1'> TaskCount </h3>
        <p className='lead'>{tasks.length}</p>
    </div>
  )
}

export default Taskscount