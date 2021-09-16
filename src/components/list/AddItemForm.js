import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddItemForm = ({ addItem, updateItem, current, setCurrent }) => {
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
      console.log(todo)
      const updatedTodo = {
        todo,
        id: current.id,
        date: new Date(),
        done: current.done
      }
      console.log(updatedTodo, 'heyyyyy')
      updateItem(updatedTodo)
    } else {
      newTodo = {
        todo,
        id: uuidv4(),
        date: new Date(),
        done: false
      }
      addItem(newTodo);
    }
    setTodo('');
    setCurrent('');
  }

  return (
    <form onSubmit={saveItem} className="todo-content__form">
      <input 
        type="text"
        name="todo"
        value={todo}
        className="todo-content__form-input"
        onChange={e => setTodo(e.target.value)}
        placeholder="Add to your list . . ."
        />
      <button type="submit" className="todo-content__form-btn" >Add</button>
    </form>
  )
}

export default AddItemForm
