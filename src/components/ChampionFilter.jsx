import React from 'react'

function ChampionFilter (props) {
  const { roles, activeFilters, setActiveFilters } = props

  const toggleFilter = role => {
    // Si le filtre est déjà actif, on le désactive
    if (activeFilters.includes(role)) {
      setActiveFilters(activeFilters.filter(f => f !== role))
    } else {
      setActiveFilters([...activeFilters, role])
    }
  }

  return (
    <div>
      <p>Filtres :</p>
      {roles.map(role => (
        <button
          key={role}
          onClick={() => toggleFilter(role)}
          style={{
            marginRight: '8px',
            backgroundColor: activeFilters.includes(role) ? 'green' : 'gray'
          }}
        >
          {role}
        </button>
      ))}
    </div>
  )
}

export default ChampionFilter
