import React, { useState } from 'react'
import ChampionPoolTier from './ChampionPoolTier'
import useLocalStorage from '../../hooks/useLocalStorage'

function ChampionPoolPlayer ({ roleIcon, playerName, onUpdateChampions }) {

  const [championPool, setChampionPool] = useLocalStorage('championPool',{
    best_champions: [],
    match_ready: [],
    scrim_ready: [],
    training_required: []
  })

  return (
    <div className='champion-pool'>
      <div className='champion-pool-header'>
        <img src={roleIcon} alt='Role Icon' />
        <h2>{playerName}</h2>
      </div>
      <div className='champion-pool-body'>
        <div className='champion-pool-tiers'>
          <ChampionPoolTier
            tierSlug='best_champions'
            tierName='Meilleurs champions'
            championPool={championPool}
            setChampionPool={setChampionPool}
          />
          <ChampionPoolTier
            tierSlug='match_ready'
            tierName='Prêts pour les matchs'
            championPool={championPool}
            setChampionPool={setChampionPool}
          />
          <ChampionPoolTier
            tierSlug='scrim_ready'
            tierName='Prêts pour les scrims'
            championPool={championPool}
            setChampionPool={setChampionPool}
          />
          <ChampionPoolTier
            tierSlug='training_required'
            tierName='Entraînement requis'
            championPool={championPool}
            setChampionPool={setChampionPool}
          />
        </div>
      </div>
    </div>
  )
}

export default ChampionPoolPlayer
