import React from 'react'

import { prop } from 'ramda'

const Checkbox = ({ onCheck, status, name}) => (
  <div className="box" id={name}>
    <input
      defaultChecked={ prop(name, status) }
      onChange={ () => onCheck(name) }
      type="checkbox"/>
    <label>{ name }</label>
  </div>
)

Checkbox.propTypes = {
  onCheck: React.PropTypes.func.isRequired,
  status: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired
}

export default Checkbox

    
    
