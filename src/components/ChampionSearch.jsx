import React, { useState } from 'react'
import championData from '../data/champions.json'
import ChampionIcon from './ChampionIcon'

function ChampionSearch () {
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

  return (
    <div className='search'>
      <div className='search__header'>
        <div className='search__roles'>
          {/* Filtres par rôle */}
          <button
            className={`search__role ${!roleFilter && 'search__role--active'}`}
            onClick={() => setRoleFilter(null)}
          >
            Tous
          </button>
          <button
            className={`search__role ${
              roleFilter === 'Top' && 'search__role--active'
            }`}
            onClick={() => setRoleFilter('Top')}
          >
            Top
          </button>
          <button
            className={`search__role ${
              roleFilter === 'Jungle' && 'search__role--active'
            }`}
            onClick={() => setRoleFilter('Jungle')}
          >
            Jungle
          </button>
          <button
            className={`search__role ${
              roleFilter === 'Mid' && 'search__role--active'
            }`}
            onClick={() => setRoleFilter('Mid')}
          >
            Mid
          </button>
          <button
            className={`search__role ${
              roleFilter === 'ADC' && 'search__role--active'
            }`}
            onClick={() => setRoleFilter('ADC')}
          >
            ADC
          </button>
          <button
            className={`search__role ${
              roleFilter === 'Support' && 'search__role--active'
            }`}
            onClick={() => setRoleFilter('Support')}
          >
            Support
          </button>
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
          filteredChampions.map((champion, index) => (
            <ChampionIcon key={index} name={champion.slug} />
          ))
        ) : (
          <p>Aucun champion ne correspond à votre recherche</p>
        )}
      </div>
    </div>
  )
}

export default ChampionSearch
