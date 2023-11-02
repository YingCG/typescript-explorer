import React, {ChangeEvent, FC, useState} from 'react'
import { ITask } from './Interface'
import { OneTask } from './OneTask'

export const TodoList : FC = () => {
    const [task, setTask] = useState<string>("")
    const [deadline, setDealine] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITask[]>([])

    const handleAddTask = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === 'task'){
            setTask(e.target.value)
        } else{
            setDealine(Number(e.target.value))
        }
    }

    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline}
        setTodoList([...todoList, newTask])
    }

  return (
    <div>
        <input type='text' placeholder='Task' name='task' onChange={handleAddTask} value={task}/>
        <input type='number' placeholder='Dateline(in Days).' name='deadline' value={deadline}/>
        <button onClick={addTask}> Add Task</button>
        <div>
            <h3>Ah! Bunch of things to do:</h3>
            <p>{todoList.map((task: ITask, key: number) => {
                return <OneTask key={key} task={task}/>
            })}</p>
        </div>
    </div>
  )
}
