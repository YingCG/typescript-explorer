import React from 'react'
import Profile from './Profile'

type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
    
}

export const Greet = (props: GreetProps) => {
    const userProfile = {
        first: 'Code',
        last: 'Monster'
      }
  return (
    <div>
        {props.isLoggedIn
        ?  
         <div>
            {/* <Profile name={userProfile} message='I am fighting with time'/> */}

            <h1>Welcome {props.name}! </h1>
            <p>You have {props.messageCount} unread messages</p>
        </div>
        : <p>Hello friend</p>    
    }

    </div>
  )
}
