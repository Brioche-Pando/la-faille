import React, { useState } from 'react'
import { useChampionContext } from '../store/StoreChampionPool'
import championData from '../data/champions.json'
import ChampionIcon from './ChampionIcon'
import RoleFilterButton from './RoleFilterButton'

function ChampionSearch () {
  const { handleMoveChampion } = useChampionContext()
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
    handleMoveChampion(championSlug, tier)
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
            role='Top'
            active={roleFilter === 'Top'}
            handleClick={setRoleFilter}
          />
          <RoleFilterButton
            role='Jungle'
            active={roleFilter === 'Jungle'}
            handleClick={setRoleFilter}
          />
          <RoleFilterButton
            role='Mid'
            active={roleFilter === 'Mid'}
            handleClick={setRoleFilter}
          />
          <RoleFilterButton
            role='ADC'
            active={roleFilter === 'ADC'}
            handleClick={setRoleFilter}
          />
          <RoleFilterButton
            role='Support'
            active={roleFilter === 'Support'}
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
      <div className='search__results'>
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