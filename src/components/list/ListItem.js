import PropTypes from 'prop-types'

const ListItem = ({ list, editItem, deleteItem, isDone }) => {
  const { id, listItem } = list

  const toggleDone = (id) => {
    isDone(id)
    console.log('toggle')
  }

  return (
    <li className='todo-content__list-item'>
      <span><button className="done" onClick={toggleDone}>
        <i className="far fa-square"></i>
        {/* <i class="far fa-check-square"></i> */}
        </button></span>
      <span className="text-content">{listItem}</span>
      <span className="change-button">
        <button className="done" onClick={() => editItem(id)}><i className="far fa-edit"></i></button>
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
