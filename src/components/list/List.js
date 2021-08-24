import React from 'react'

const List = () => {
  return (
    <ul id="display-list">
      <li>
        <span className="text-content">Hey there</span>
        <span className="change-button">
          <button className="done">done</button>
          <button className="delete">delete</button>
        </span>
      </li>
    </ul>
  )
}

export default List
