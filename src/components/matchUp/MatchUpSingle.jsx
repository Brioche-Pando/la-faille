import React from 'react'
import ChampionIcon from '../ChampionIcon'
import MatchUpTier from './MatchUpTier'

function MatchUpSingle ({ selectedChampion, isPreview = false }) {
  return (
    <div className='matchup'>
      {!isPreview ? (
        <div className='matchup__header'>
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
              <img src='' alt='click icon' className='matchup__selection-img' />
              <figcaption>
                Cliquer sur un champion pour le sélectionner
              </figcaption>
            </figure>
          )}
        </div>
      ) : (
        <div className='matchup__header'>
          <h2>Match up</h2>
        </div>
      )}
      <div className='matchup__tiers'>
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
    </div>
  )
}

export default MatchUpSingle
