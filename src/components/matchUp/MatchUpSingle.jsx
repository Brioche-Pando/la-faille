import React from 'react'
import MatchUpTier from './MatchUpTier'
import ChampionIcon from '../championIcon/ChampionIcon'

function MatchUpSingle ({ selectedChampion, isPreview = false }) {
  return (
    <div className='matchup tier-list'>
      {!isPreview ? (
        <div className='matchup__header tier-list__header'>
          <h2>Match up</h2>
          {selectedChampion ? (
            <>
              <ChampionIcon champion={selectedChampion} />
              <figcaption className='matchup__selection-caption'>
                {selectedChampion.name}
              </figcaption>
            </>
          ) : (
            <figure>
              <img src='/src/assets/img/icons/click.svg' alt='click icon illustration' className='matchup__selection-img' />
              <figcaption>
                Cliquer sur un champion pour le sélectionner
              </figcaption>
            </figure>
          )}
        </div>
      ) : (
        <div className='matchup__header tier-list__header'>
          <h2>Match up</h2>
        </div>
      )}
      <MatchUpTier
        selectedChampion={selectedChampion}
        tierSlug={'strong_against'}
        tierName={'Fort contre'}
        isPreview={isPreview}
      />
      <MatchUpTier
        selectedChampion={selectedChampion}
        tierSlug={'weak_against'}
        tierName={'Faible contre'}
        isPreview={isPreview}
      />
      <MatchUpTier
        selectedChampion={selectedChampion}
        tierSlug={'strong_with'}
        tierName={'Fort avec'}
        isPreview={isPreview}
      />
      <MatchUpTier
        selectedChampion={selectedChampion}
        tierSlug={'weak_with'}
        tierName={'Faible avec'}
        isPreview={isPreview}
      />
    </div>
  )
}

export default MatchUpSingle
