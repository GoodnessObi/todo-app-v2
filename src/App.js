import { useState, useEffect } from 'react';
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
    },
    {
      id : 3,
      listItem: 'Another'
    }
  ]);
  // const [listItem, set ]

  //set state from local storage  with useEffect when page loads
  useEffect(() => {
    localStorage.getItem(lists)
  }, [lists]);

  // On add save directly to local storage - remove save button
  const addItem = () => {
    console.log('add to local storage')
    // localStorage.setItem('lists', listItem)
    // localStorage.setItem()

  }

  //edit
  const editItem = (id) => {
    console.log('edit')
  }

  //delete
  const deleteItem = (id) => {
    console.log('delete')
  }

  //clear button clears local storage
  const clearList = () => {
    console.log('clear')
    localStorage.removeItem('lists')
  }

  //wire up toggle on done list-item
  const isDone = () => {
    console.log('isdone?')
  }

  //consider alternatively using a checkbox

  return (
    <div className='todo-content'>
      <h1>My To-Do List</h1>
      <AddItemForm addItem={addItem} />
      <div className='todo-content__body'>
        <List lists={lists} editItem={editItem} deleteItem={deleteItem} isDone={isDone} />
        <Buttons clearList={clearList} />
      </div>
      <p>get doing ...</p>
    </div>
  );
}

export default App;
