import React from 'react'

const List = (props) => {
  return (
    <>
      { props.todoItems
        ? props.todoItems.map(item => {
          return (
            <div className='todo-item' />
          )
        })
        : <h2 className='message'>NOTHING TO DO</h2>
      }
    </>
  )
}

export default List
