import { useState } from 'react';
import './App.scss';
import Buttons from './components/layout/Buttons';
import AddItemForm from './components/list/AddItemForm';
import List from './components/list/List';

const  App = () => {
  const [lists, setLists] = useState([
    {
      id : 1,
      listItem: 'Hey there'
    },
    {
      id : 2,
      listItem: 'Number two'
    }
  ])

  return (
    <div className='todo-content'>
      <h1>My To-Do List</h1>
      <AddItemForm />
      <div className='todo-content__body'>
        <List lists={lists} />
        <Buttons />
      </div>
      <p>get doing ...</p>
    </div>
  );
}

export default App;
