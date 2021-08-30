import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = ({ lists }) => {
  return (
    <ul className="todo-content__list">
      {lists.map((list) => (
        <ListItem list={list} key={list.id} />
      ))}
      
    </ul>
  )
}

List.propTypes = {
  lists: PropTypes.array.isRequired
}

export default List
