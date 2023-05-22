import React from 'react'
import ChampionSearch from '../championSearch/ChampionSearch'
import useLocalStorage from '../../hooks/useLocalStorage'
import ChampionIcon from '../ChampionIcon'

function MatchUpTier ({ tierSlug, tierName, selectedChampion }) {
  const [matchUpPool, setMatchUpPool] = useLocalStorage('matchUpPool', {
    selectedChampion: {
      weak_against: [],
      strong_against: [],
      strong_with: [],
      weak_with: []
    }
  })

  function handleAddChampion (newChampion) {
    const { slug } = selectedChampion // Récupérer le slug du champion sélectionné

    // Vérifier si le match-up du champion sélectionné existe déjà
    const selectedChampionMatchUp = matchUpPool[slug] || {
      weak_against: [],
      strong_against: [],
      strong_with: [],
      weak_with: []
    }

    const newMatchUpTabs = [...selectedChampionMatchUp[tierSlug], newChampion]

    const newMatchUpPool = {
      ...matchUpPool,
      [slug]: {
        ...selectedChampionMatchUp,
        [tierSlug]: newMatchUpTabs
      }
    }

    setMatchUpPool(newMatchUpPool)
  }

  function handleRemoveChampion (championToRemove) {
    const { slug } = selectedChampion // Récupérer le slug du champion sélectionné

    // Vérifier si le match-up du champion sélectionné existe déjà
    const selectedChampionMatchUp = matchUpPool[slug] || {
      weak_against: [],
      strong_against: [],
      strong_with: [],
      weak_with: []
    }

    const updatedChampions = selectedChampionMatchUp[tierSlug].filter(
      champion => champion.slug !== championToRemove.slug
    )

    const newMatchUpPool = {
      ...matchUpPool,
      [slug]: {
        ...selectedChampionMatchUp,
        [tierSlug]: updatedChampions
      }
    }

    setMatchUpPool(newMatchUpPool)
  }

  return (
    <div className='matchup__tier'>
      <div style={{ display: 'flex' }}>
        <h3>{tierName}</h3>
        <button
          onClick={() => {
            document
              .getElementById('modal-' + tierSlug)
              .classList.toggle('search-modal--hidden')
          }}
        >
          +
        </button>
      </div>
      <div className='matchup__content' style={{ position: 'relative' }}>
        <ul
          style={{
            minHeight: '150px',
            minWidth: '250px',
            border: '1px solid black'
          }}
        >
          {selectedChampion ? (
            matchUpPool[selectedChampion.slug] ? (
              matchUpPool[selectedChampion.slug][tierSlug].map(champion => (
                <li key={'matchuppool-' + champion.slug}>
                  <ChampionIcon
                    champion={champion}
                  />
                  <span>{champion.name}</span>
                  <button onClick={() => handleRemoveChampion(champion)}>
                    Remove
                  </button>
                </li>
              ))
            ) : (
              <li>Aucun champion n'a été ajouté pour le moment</li>
            )
          ) : (
            <li>Aucun champion n'est sélectionné pour le moment</li>
          )}
        </ul>
        <div
          id={'modal-' + tierSlug}
          className='search-modal search-modal--hidden'
        >
          <ChampionSearch
            hasFilter={false}
            handleChampionSelect={handleAddChampion}
          />
        </div>
      </div>
    </div>
  )
}

export default MatchUpTier
