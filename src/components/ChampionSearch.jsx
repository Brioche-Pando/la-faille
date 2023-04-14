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

  const handleRoleFilterClick = role => {
    if (role === roleFilter) {
      // Désactiver le filtre si on clique sur un filtre déjà actif
      setRoleFilter(null)
    } else {
      // Activer le filtre si on clique sur un filtre inactif
      setRoleFilter(role)
    }
  }

  return (
    <div>
      <div>
        {/* Filtres par rôle */}
        <button onClick={() => handleRoleFilterClick(null)}>Tous</button>
        <button onClick={() => handleRoleFilterClick('Top')}>Top</button>
        <button onClick={() => handleRoleFilterClick('Jungle')}>Jungle</button>
        <button onClick={() => handleRoleFilterClick('Mid')}>Mid</button>
        <button onClick={() => handleRoleFilterClick('ADC')}>ADC</button>
        <button onClick={() => handleRoleFilterClick('Support')}>
          Support
        </button>
      </div>
      <div>
        {/* Barre de recherche */}
        <input
          type='text'
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
        />
      </div>
      <div>
        {/* Afficher les champions filtrés */}
        {filteredChampions.map((champion, index) => (
          <ChampionIcon key={index} name={champion.slug} />
        ))}
      </div>
    </div>
  )
}

export default ChampionSearch
