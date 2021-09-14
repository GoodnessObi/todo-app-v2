import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = ({ lists, updateItem, deleteItem, setCurrent }) => {

  if (lists.length === 0) {
    return <p>No item on your list yet</p>
  }

  return (
    <ul className="todo-content__list">
      {lists.length > 0 && lists.map((list) => (
        <ListItem list={list} key={list.id}  updateItem={ updateItem} deleteItem={deleteItem} setCurrent={setCurrent} />
      ))}
    </ul>
  )
}

List.propTypes = {
  lists: PropTypes.array,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
  isDone: PropTypes.func
}

export default List
