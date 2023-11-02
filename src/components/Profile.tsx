import React from 'react'


interface UserProfile {
    name: {
        first: string
        last: string
    }
    message?: string
}

const Profile = (props: UserProfile) => {
    // a default message value is set this way
    const {message = `{props.name.last} is online`} = props
  return (
    <div>
      <p>{props.name.first} {props.name.last} :  {message}</p>
    </div>
  )
}

export default Profile
