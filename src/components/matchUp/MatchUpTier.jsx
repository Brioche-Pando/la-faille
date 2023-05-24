import React from 'react'
import ChampionSearch from '../championSearch/ChampionSearch'
import useLocalStorage from '../../hooks/useLocalStorage'
import ChampionIcon from '../championIcon/ChampionIcon'

function MatchUpTier ({ tierSlug, tierName, selectedChampion, isPreview }) {
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
        {isPreview || (
          <button
            onClick={() => {
              document
                .getElementById('modal-' + tierSlug)
                .classList.toggle('search-modal--hidden')
            }}
          >
            +
          </button>
        )}
      </div>
      <div className='matchup__content' style={{ position: 'relative' }}>
        <ul
          style={{
            minHeight: '100px',
            minWidth: '150px',
            border: '1px solid black',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px'
          }}
        >
          {selectedChampion ? (
            matchUpPool[selectedChampion.slug] ? (
              matchUpPool[selectedChampion.slug][tierSlug].map(champion => (
                <li
                  key={'matchuppool-' + champion.slug}
                  style={{ listStyle: 'none' }}
                >
                  <ChampionIcon champion={champion} />
                  <span>{champion.name}</span>

                  {isPreview || (
                    <button onClick={() => handleRemoveChampion(champion)}>
                      Remove
                    </button>
                  )}
                </li>
              ))
            ) : (
              <li style={{ listStyle: 'none' }}>
                Aucun champion n'a été renseigné dans ce tier pour le moment
              </li>
            )
          ) : (
            <li style={{ listStyle: 'none' }}>
              Aucun champion n'est sélectionné pour le moment
            </li>
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
