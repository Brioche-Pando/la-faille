import React, { useState } from 'react'
import CompositionSinglePick from '../picks/CompositionSinglePick'
import MatchUpSingle from '../../matchUp/MatchUpSingle'
import CompositionSingleBan from './CompositionSingleBan'

const CompositionBans = ({ onPrevious, onNext, picks, bans, handleSetBan }) => {
  const sortedPicks = Object.entries(picks).sort((a, b) => {
    const order = ['top', 'jungle', 'mid', 'adc', 'support']
    return order.indexOf(a[0]) - order.indexOf(b[0])
  })

  return (
    <div className='new-composition__inner'>
      <div className='new-composition__content'>
        {sortedPicks.map((pick, key) => (
          <div key={pick[0]} className='new-composition__col'>
            {/* CompositionSingleBan */}
            <CompositionSingleBan
              number={key + 1}
              bans={bans}
              handleSetBan={handleSetBan}
            />

            {/* Rappel des picks pour chaque poste */}
            <CompositionSinglePick
              role={pick[0]}
              pseudoPlayer={pick[0]}
              picks={picks}
              isPreview={true}
            />

            {/* MatchUpSingle pour chaque pick */}
            <MatchUpSingle selectedChampion={pick[1].pick} isPreview={true} />
          </div>
        ))}
      </div>

      {/* Boutons pour passer à l'étape précédente ou suivante */}
      <div className='new-composition__buttons'>
        <button onClick={onPrevious}>Précédent</button>
        <span className='new-composition__buttons-separator'></span>
        <button onClick={onNext}>Suivant</button>
      </div>
    </div>
  )
}

export default CompositionBans
