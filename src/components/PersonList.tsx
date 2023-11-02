import React from 'react'
type userList = {
    names: {
        first: string
        last: string
    }[]
}

const PersonList = (props: userList) => {
  return (
    <div>
      {props.names.map((name, key) => {
        return (
            <h3 key={name.first}>{name.first} {name.last}</h3>
        )
      })}
    </div>
  )
}

export default PersonList
