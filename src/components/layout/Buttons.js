import PropTypes from 'prop-types'

const Buttons = ({ clearList }) => {
  return (
    <div className="storage-buttons-container">
      <div className="storage-buttons">
        <button className="clear-storage" onClick={clearList}>Clear</button>
      </div>
    </div>
  )
}

Buttons.propTypes = {
  clearList: PropTypes.func
}

export default Buttons
