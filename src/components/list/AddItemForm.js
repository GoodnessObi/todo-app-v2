import React from 'react'

const AddItemForm = ({ addItem }) => {
  const saveItem = () => {
    console.log('save');
    addItem();
  }

  return (
    <div className='enter-input'>
      <input type="text" id="input-box" placeholder="Add to your list . . ." />
      <button id="add-to-list" onClick={saveItem}>Add</button>
    </div>
  )
}

export default AddItemForm
