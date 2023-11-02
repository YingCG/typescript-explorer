import React from 'react'
import { ITask } from './Interface'

interface TodoProps{
    task: ITask
}


// or
// export const OneTask = ({task}: TodoProps) => {
export const OneTask = (props: TodoProps) => {
  return (
    <div>
        {props.task.taskName}
        {props.task.deadline}
    </div>
  )
}
