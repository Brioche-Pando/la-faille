import React from 'react'

function RoleButton ({ role, active, handleClick }) {
  const onClick = () => {
    if (active) {
      handleClick(null)
    } else {
      handleClick(role)
    }
  }

  return (
    <button
      className={`role-button ${active ? 'role-button--active' : ''}`}
      onClick={() => onClick()}
    >
      <img
        src={'/./assets/img/role_icons/' + role + '.svg'}
        alt={'filtre pour ' + role + ' lane'}
        className='role-button__icon'
      />
    </button>
  )
}

export default RoleButton
