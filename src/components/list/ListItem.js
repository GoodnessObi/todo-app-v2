import { useState } from 'react';
import PropTypes from 'prop-types'

const ListItem = ({ list, updateItem, deleteItem, setCurrent }) => {
  const { id, todo, done } = list;
  const [isDone, setIsDone] = useState(done);

  const toggle = () => {
    setIsDone(!isDone);

    const updatedTodo = {
      ...list,
      done: isDone
    }
    console.log(updatedTodo, 'Todo') 
    updateItem(updatedTodo);
  }

  return (
    <li className='todo-content__list-item'>
      <input type="checkbox" checked={done} value={done} onChange={toggle} />

      <span className="text-content">{todo}</span>

      <span className="change-button">
        <button className="done" onClick={() => setCurrent(list)}><i className="far fa-edit"></i></button>
        <button className="delete" onClick={() => deleteItem(id)}><i className="far fa-trash-alt"></i></button>
      </span>
    </li>
  )
}

ListItem.propTypes = {
  list: PropTypes.object.isRequired,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func,
}

export default ListItem
