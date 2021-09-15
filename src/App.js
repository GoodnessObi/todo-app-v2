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

  const [current, setCurrent] = useState('')

  //set state from local storage  with useEffect when
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists)) 
  }, [lists]);

  // On add save directly to local storage - remove save button
  const addItem = (listItem) => {
    setLists([...lists, listItem])    
  }

  const updateItem = (updatedItem) => { 
    setLists(lists.map(list => list.id === updatedItem.id ? updatedItem : list))
  }

  //delete
  const deleteItem = (id) => {
    console.log('delete')
    const newList = lists.filter(list => list.id !== id)
    setLists(newList)
  }

  //clear button clears local storage
  const clearList = () => {
    localStorage.removeItem('lists')
    setLists([]);
  }

  return (
    <div className='todo-content'>
      <h1>My To-Do List</h1>
      <AddItemForm addItem={addItem} updateItem={updateItem} current={current} setCurrent={setCurrent} />
      <div className='todo-content__body'>
        <List lists={lists} deleteItem={deleteItem} current={current} setCurrent={setCurrent} updateItem={updateItem} />
        {lists.length > 0 && <Buttons clearList={clearList} />}
      </div>
      <p>get doing ...</p>
    </div>
  );
}

export default App;
