import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddItemForm = ({ addItem }) => {
  const [todo, setTodo] = useState('')

  const saveItem = () => {
    if (todo === '') {
      console.log('nope')
    } else {
      const newTodo = {
        todo,
        id: uuidv4(),
        date: new Date()
      }
      console.log(newTodo, 'new')
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
