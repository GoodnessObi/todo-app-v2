import PropTypes from 'prop-types'

const ListItem = ({ list, editItem, deleteItem, isDone }) => {
  const { id, todo } = list

  const toggleDone = (id) => {
    isDone(id)
    console.log('toggle')
  }

  const edit = (id) => {
    editItem(todo)
  }

  return (
    <li className='todo-content__list-item'>
      <span><button className="done" onClick={toggleDone}>
        <i className="far fa-square"></i>
        {/* <i class="far fa-check-square"></i> */}
        </button></span>
      <span className="text-content">{todo}</span>
      <span className="change-button">
        <button className="done" onClick={() => edit(id)}><i className="far fa-edit"></i></button>
        <button className="delete" onClick={() => deleteItem(id)}><i className="far fa-trash-alt"></i></button>
      </span>
    </li>
  )
}

ListItem.propTypes = {
  list: PropTypes.object.isRequired,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func,
  isDone: PropTypes.func
}

export default ListItem
