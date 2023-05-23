import React, { useState } from 'react';
import CompositionSinglePick from './CompositionSinglePick';
import ChampionPoolSingle from '../../championPool/ChampionPoolSingle';
import topChampionPool from '../../../data/championPool/top.json';
import jungleChampionPool from '../../../data/championPool/jungle.json';
import midChampionPool from '../../../data/championPool/mid.json';
import adcChampionPool from '../../../data/championPool/adc.json';

const CompositionPicks = ({ onNext, picks, handleSetPick }) => {
  const lineUp = [
    {
      role: 'top',
      championPool: topChampionPool
    },
    {
      role: 'jungle',
      championPool: jungleChampionPool
    },
    {
      role: 'mid',
      championPool: midChampionPool
    },
    {
      role: 'adc',
      championPool: adcChampionPool
    },
    {
      role: 'support',
      championPool: false
    }
  ];

  const handlePickSelection = (role, pick) => {
    handleSetPick(role, pick);
  };

  return (
    <div>
      {/* Affichage des choix de picks */}
      <h2>Step 1: Choose Picks</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {lineUp.map(player => (
          <div key={player.role}>
            {/* CompositionSinglePick pour chaque poste */}
            <CompositionSinglePick
              role={player.role}
              pseudoPlayer={player.role}
              picks={picks}
              handleSetPick={handlePickSelection}
            />

            {/* ChampionPoolSingle pour chaque poste */}
            <ChampionPoolSingle
              roleIcon={player.role}
              isChampionPoolPage={true}
              championPoolLocal={player.championPool}
            />
          </div>
        ))}
      </div>

      {/* Bouton pour passer à l'étape suivante */}
      <a href='/compositions'>quitter</a>
      <button onClick={onNext} disabled={Object.keys(picks).length < 5}>suivant</button>
    </div>
  );
};

export default CompositionPicks;
