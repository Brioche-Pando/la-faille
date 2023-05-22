import React, { useState } from 'react'
import championData from '../../data/champions.json'
import ChampionIcon from '../ChampionIcon'
import RoleFilterButton from './RoleFilterButton'

function ChampionSearch ({ hasFilter = true, handleChampionSelect = null }) {
  const [roleFilter, setRoleFilter] = useState()
  const [searchText, setSearchText] = useState()

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
            {/* Filtres par rôle */}
            <RoleFilterButton
              role='top'
              active={roleFilter === 'top'}
              handleClick={setRoleFilter}
            />
            <RoleFilterButton
              role='jungle'
              active={roleFilter === 'jungle'}
              handleClick={setRoleFilter}
            />
            <RoleFilterButton
              role='mid'
              active={roleFilter === 'mid'}
              handleClick={setRoleFilter}
            />
            <RoleFilterButton
              role='adc'
              active={roleFilter === 'adc'}
              handleClick={setRoleFilter}
            />
            <RoleFilterButton
              role='support'
              active={roleFilter === 'support'}
              handleClick={setRoleFilter}
            />
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
