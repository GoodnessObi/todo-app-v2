import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = ({ lists, editItem, deleteItem, isDone }) => {
  return (
    <ul className="todo-content__list">
      {lists.length > 0 && lists.map((list) => (
        <ListItem list={list} key={list.id} editItem={editItem} deleteItem={deleteItem} isDone={isDone} />
      ))}
    </ul>
  )
}

List.propTypes = {
  lists: PropTypes.array,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func,
  isDone: PropTypes.func
}

export default List
