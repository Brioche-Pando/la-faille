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
    
    document
      .getElementById('modal-' + tierSlug)
      .classList.toggle('search-modal--hidden')
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
    <div className='matchup__rank tier-list__rank'>
      <div className='matchup__rank-label tier-list__rank-label'>
        <p>{tierName}</p>
        {!isPreview && selectedChampion != null && (
          <button
            onClick={() => {
              document
                .getElementById('modal-' + tierSlug)
                .classList.toggle('search-modal--hidden')
            }}
          >
            <img
              src='src/assets/img/icons/add-cross.svg'
              alt='open modal to add champion'
            />
          </button>
        )}
      </div>
      <ul className='matchup__rank-list tier-list__rank-list'>
        {selectedChampion ? (
          matchUpPool[selectedChampion.slug] ? (
            matchUpPool[selectedChampion.slug][tierSlug].map(champion => (
              <li
                key={'matchuppool-' + champion.slug}
                className='matchup__rank-item tier-list__rank-item'
              >
                <ChampionIcon champion={champion} />
                {isPreview || (
                  <button
                    onClick={() => handleRemoveChampion(champion)}
                    className='matchup__rank-item__remove tier-list__item__remove'
                  >
                    Remove
                  </button>
                )}
              </li>
            ))
          ) : (
            <li className='matchup__rank-item matchup__rank-item--empty tier-list__rank-item tier-list__rank-item--empty'>
              Aucun champion n'a été renseigné dans ce tier pour le moment
            </li>
          )
        ) : (
          <li className='matchup__rank-item matchup__rank-item--empty tier-list__rank-item tier-list__rank-item--empty'>
            Aucun champion n'est sélectionné pour le moment
          </li>
        )}
      </ul>
      <div
        id={'modal-' + tierSlug}
        className='search-modal search-modal--hidden'
      >
        <div className='search-modal__inner'>
          <ChampionSearch
            isModal={true}
            handleChampionSelect={handleAddChampion}
          />
        </div>
      </div>
    </div>
  )
}

export default MatchUpTier
