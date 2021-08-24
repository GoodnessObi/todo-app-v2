import React from 'react'

const AddItemForm = () => {
  return (
    <div className='enter-input'>
      <input type="text" id="input-box" placeholder="Add to your list . . ." />
      <button id="add-to-list">Add</button>
    </div>
  )
}

export default AddItemForm
