import React, { useState } from 'react'
import championData from '../../data/champions.json'
import ChampionIcon from '../championIcon/ChampionIcon'
import RoleButton from '../roleButton/RoleButton'

function ChampionSearch ({ hasFilter = true, handleChampionSelect = null }) {
  const [roleFilter, setRoleFilter] = useState()
  const [searchText, setSearchText] = useState('')

  const roles = ['top', 'jungle', 'mid', 'adc', 'support']

  // Filtrer les champions en fonction des filtres actifs
  const filteredChampions = championData.filter(champion => {
    // Filtrer par rôle si un rôle est sélectionné
    if (roleFilter && !champion.roles.includes(roleFilter)) {
      return false
    }

    // Filtrer par texte de recherche si un texte est entré
    if (
      searchText &&
      !champion.name.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return false
    }

    return true
  })

  const handleDragStart = (event, championId, championSlug) => {
    event.dataTransfer.setData('championId', championId)
    event.dataTransfer.setData('championSlug', championSlug)
  }

  return (
    <div className='search'>
      <div className='search__header'>
        {hasFilter && (
          <div className='search__roles'>
            {roles.map(role => (
              <RoleButton
                key={role}
                role={role}
                active={roleFilter === role}
                handleClick={setRoleFilter}
              />
            ))}
          </div>
        )}
        <div className='search__bar'>
          {/* Barre de recherche */}
          <input
            type='text'
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
          />
        </div>
      </div>
      <div
        className='search__results'
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {/* Afficher les champions filtrés */}
        {filteredChampions.length ? (
          filteredChampions.map(champion => (
            <ChampionIcon
              key={champion.id}
              champion={champion}
              draggable
              onDragStart={e => handleDragStart(e, champion.id, champion.slug)}
              onChampionSelect={handleChampionSelect}
            />
          ))
        ) : (
          <p>Aucun champion ne correspond à votre recherche</p>
        )}
      </div>
    </div>
  )
}

export default ChampionSearch
