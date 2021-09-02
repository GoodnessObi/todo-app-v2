import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddItemForm = ({ addItem, current }) => {
  const [todo, setTodo] = useState('')

  useEffect(() => {
    if (current !== '') {
      setTodo(current.todo)
    } else {
      setTodo('')
    }
  }, [current]);

  const saveItem = () => {
    let newTodo;
    if (todo === '') {
      console.log('nope')
      return;
    }

    if (current !== '') {
      newTodo = {
     
      }
    } else {
      newTodo = {
        todo,
        id: uuidv4(),
        date: new Date(),
        isDone: false
      }
      addItem(newTodo);
      setTodo('')
    }
  }

  return (
    <div className='enter-input'>
      <input 
        type="text"
        name="todo"
        value={todo}
        id="input-box"
        onChange={e => setTodo(e.target.value)}
        placeholder="Add to your list . . ."
        />
      <button id="add-to-list" onClick={saveItem}>Add</button>
    </div>
  )
}

export default AddItemForm
