import PropTypes from 'prop-types'

const ListItem = ({ list }) => {
  return (
    <li className='TodoContent__listItem'>
      <span><button className="done">
        <i class="far fa-square"></i>
        {/* <i class="far fa-check-square"></i> */}
        </button></span>
      <span className="text-content">{list.listItem}</span>
      <span className="change-button">
        <button className="done"><i class="far fa-edit"></i></button>
        <button className="delete"><i class="far fa-trash-alt"></i></button>
      </span>
    </li>
  )
}

ListItem.propTypes = {
  list: PropTypes.object.isRequired
}

export default ListItem
