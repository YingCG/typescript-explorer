import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import PersonList from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { TodoList } from './todos/TodoList';

function App() {
  const userList = [
    {first: 'Cookies', last: 'Monster', message: ''},
    {first: 'Fruit', last: 'Monster'},
    {first: 'Vege', last: 'Head'},

  ]

  return (
    <div className="App">
    <Greet name='you' messageCount={100} isLoggedIn={false}/>
    <PersonList names={userList} /> 
    {/* <Status status='success'/>
    {/* <Button handleClick={(event) => {
      console.log('button clicked', event) 
    }}/> */}
    <TodoList/>
    </div>
  );
}

export default App;
