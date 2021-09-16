import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const ListItem = ({ list, updateItem, deleteItem, setCurrent }) => {
  const { id, todo, done } = list;
  const [isDone, setIsDone] = useState(done);
  

  useEffect(() => {
    const updatedTodo = {
      ...list,
      done: isDone
    }
    updateItem(updatedTodo);
    // eslint-disable-next-line
  }, [isDone]);

  return (
    <li className='todo-content__list-item'>
      <input type="checkbox" className="checkbox" checked={done} value={done} onChange={e => setIsDone(!isDone)} />
      
      <div className={`text-content ${done}`}>{todo}</div>

      <div className="todo-content__list-btns">
        { !done && <button className="btn-edit" onClick={() => setCurrent(list)}><i className="far fa-edit"></i></button> }
        <button className="btn-delete" onClick={() => deleteItem(id)}><i className="far fa-trash-alt"></i></button>
      </div>
    </li>
  )
}

ListItem.propTypes = {
  list: PropTypes.object.isRequired,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
}

export default ListItem
