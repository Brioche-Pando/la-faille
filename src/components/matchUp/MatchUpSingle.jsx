import React from 'react'
import ChampionIcon from '../ChampionIcon'

function MatchUpSingle ({ selectedChampion }) {
  return (
    <div className='matchup'>
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
          <>
            <img src='' alt='' className='matchup__selection-img' />
          </>
        )}
      </div>
      <div className='matchup__tiers'></div>
    </div>
  )
}

export default MatchUpSingle
