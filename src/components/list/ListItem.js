import { useState } from 'react';
import PropTypes from 'prop-types'

const ListItem = ({ list, editItem, deleteItem, setCurrent }) => {
  const { id, todo } = list;
  const [isDone, setIsDone] = useState(false);

  const toggle = (id) => {
    setIsDone(!isDone);

    if (isDone === false) {
      console.log(isDone, '>>>>>', id)
      return;
    }
    console.log(isDone, 'true state', id)
    return;
  }

  return (
    <li className='todo-content__list-item'>
      <input type="checkbox" checked={isDone} value={isDone} onChange={e => toggle(id)}  />
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
