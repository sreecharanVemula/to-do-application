import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { useContext } from 'react'
import { TaskList } from '../contexts/TaskContext'

function Addtask(props) {

    let{register,handleSubmit,formState:{errors}}=useForm()
    let[tasks,setTasks]=useContext(TaskList)
    function handleFormSubmit(obj)
    {
            setTasks([...tasks,obj])
    }
  return (
    <div>
        <h3 className='lead fs-1'> AddTask </h3>
        <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
            <input type="text" className="form-control" placeholder='Eneter a Task' {...register('task',{required:true})}/>
            {
                errors.task?.type==='required'&& <p className='lead text-danger'> enter a task</p>
            }
            <button type="submit" className="btn btn-info mt-2 d-block mx-auto">
                Add Task
            </button>
        </form>
    </div>
  )
}

export default Addtask