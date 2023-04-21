import React, { useState } from 'react'
import championData from '../../data/champions.json'
import ChampionIcon from '../ChampionIcon'
import RoleFilterButton from './RoleFilterButton'

function ChampionSearch () {
  const [searchChampions, setSearchChampions] = useState([])
  const [roleFilter, setRoleFilter] = useState(null)
  const [searchText, setSearchText] = useState('')

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

  const handleDragStart = (event, championSlug) => {
    event.dataTransfer.setData('championSlug', championSlug)
  }

  const handleDrop = (event, tier) => {
    event.preventDefault()
    const championSlug = event.dataTransfer.getData('championSlug')
    setSearchChampions(searchChampions.filter(c => c.slug !== championSlug))
  }

  const handleDragOver = event => {
    event.preventDefault()
  }

  return (
    <div className='search'>
      <div className='search__header'>
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
            <div
              key={champion.slug + '-search'}
              className='search__result'
              onDragOver={handleDragOver}
              onDrop={event => handleDrop(event, 'unranked')}
            >
              <ChampionIcon
                name={champion.slug}
                draggable
                onDragStart={e => handleDragStart(e, champion.slug)}
              />
            </div>
          ))
        ) : (
          <p>Aucun champion ne correspond à votre recherche</p>
        )}
      </div>
    </div>
  )
}

export default ChampionSearch
