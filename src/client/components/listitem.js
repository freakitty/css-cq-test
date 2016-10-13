import React from 'react'

const ListItem = ({ name, value, idx }) => (console.log(value),
  <li className={idx%5?'income':'outcome'}>
    <span>{ `${name} :`}</span>
    <span className="value">{ `${value}`}</span>
  </li>)

ListItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
}

export default ListItem
