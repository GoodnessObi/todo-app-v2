import { useState, useEffect } from 'react';
import './App.scss';
import Buttons from './components/layout/Buttons';
import AddItemForm from './components/list/AddItemForm';
import List from './components/list/List';

const  App = () => {
  const [lists, setLists] = useState(() => {
    // getting stored value
    const localData = localStorage.getItem('lists')
    const initialValue = localData ? JSON.parse(localData) : [];
    return initialValue;
  });

  //set state from local storage  with useEffect when
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists)) 
  }, [lists]);

  // On add save directly to local storage - remove save button
  const addItem = (listItem) => {
    setLists([...lists, listItem])    
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
    localStorage.removeItem('lists')
    setLists([]);
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
