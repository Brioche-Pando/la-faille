import React, { useState } from 'react'
import CompositionSinglePick from '../picks/CompositionSinglePick'
import MatchUpSingle from '../../matchUp/MatchUpSingle'
import CompositionSingleBan from './CompositionSingleBan';

const CompositionBans = ({ onPrevious, onNext, picks, bans, handleSetBan }) => {
  const sortedPicks = Object.entries(picks).sort((a, b) => {
    const order = ['top', 'jungle', 'mid', 'adc', 'support'];
    return order.indexOf(a[0]) - order.indexOf(b[0]);
  });

  return (
    <div>
      {/* Affichage des bans, picks et match-ups */}
      <h2>Step 2: Choose Bans</h2>
      {/* Utiliser les états "bans", "picks" et "matchUps" pour afficher les données */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {sortedPicks.map((pick, key) => (
          <div key={pick[0]}>
            {/* CompositionSingleBan */}
            <CompositionSingleBan
              number={key+1}
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
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default CompositionBans
