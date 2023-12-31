import React from 'react'

type StatusProps ={
    // status: string
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
    } else if (props.status === 'success'){
        message = 'Data fetched sucessfully!'
    } else if (props.status === 'error'){
        message = 'Error fetching data'
    }
  return (
    <div>
       Status - {message}
    </div>
  )
}
