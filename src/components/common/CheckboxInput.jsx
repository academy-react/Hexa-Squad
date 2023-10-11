import React from 'react'

const CheckboxInput = ({name}) => {
  return (
    <input
      type="checkbox"
      name={name}
      id={name}
      className="hidden"
    />
  )
}

export default CheckboxInput