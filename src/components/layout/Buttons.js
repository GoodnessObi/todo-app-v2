import PropTypes from 'prop-types'

const Buttons = ({ clearList }) => {
  return (
    <div className="todo-content__btn">
      <button className="todo-content__btn-clear" onClick={clearList}>Clear</button>
    </div>
  )
}

Buttons.propTypes = {
  clearList: PropTypes.func
}

export default Buttons
