import React from 'react'
import { useContext } from 'react'
import { TaskList } from '../contexts/TaskContext'


function Tasklist(props) {
  let[tasks,setTasks]=useContext(TaskList)
  function clearTasks()
  {
    setTasks([]);
  }
  return (
    <div>
        <h3 className='lead fs-1'> TaskList </h3>
        {
            tasks.map((taskobj,index)=>
                <p className='lead ' key={index}>{taskobj.task}</p>
            
            )
        }
        {
          tasks.length>0 && <button onClick={clearTasks} className="btn btn-info mt-2 d-block mx-auto">
          Clear Tasks
      </button>
        }
    </div>
  )
}

export default Tasklist