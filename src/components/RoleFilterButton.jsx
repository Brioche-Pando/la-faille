import React from 'react'

function RoleFilterButton (props) {
  const { role, active, handleClick } = props

  const onClick = () => {
    if (active) {
      handleClick(null)
    } else {
      handleClick(role)
    }
  }

  return (
    <button
      className={`search__role ${active ? 'search__role--active' : ''}`}
      onClick={() => onClick()}
    >
      {role}
    </button>
  )
}

export default RoleFilterButton
