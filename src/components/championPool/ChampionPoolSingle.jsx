import React, { useState } from 'react'
import ChampionPoolTier from './ChampionPoolTier'
import useLocalStorage from '../../hooks/useLocalStorage'

function ChampionPoolSingle ({
  roleIcon,
  playerName = 'Pseudo',
  editable = false,
  isChampionPoolPage = false,
  championPoolLocal = false,
  handleChampionSelect = null
}) {
  const [championPool, setChampionPool] = useLocalStorage('championPool', {
    best_champions: [],
    match_ready: [],
    scrim_ready: [],
    training_required: []
  })

  return (
    <div className='championpool'>
      <div className='championpool__header'>
        {!isChampionPoolPage ? (
          <>
            <img src={roleIcon} alt='Role Icon' />
            <h2>{playerName}</h2>
          </>
        ) : (
          <h2>Champion Pool</h2>
        )}
      </div>
      <div className='championpool__tiers'>
        <ChampionPoolTier
          tierSlug='best_champions'
          tierName='Meilleurs champions'
          championPool={championPoolLocal ? championPoolLocal : championPool}
          setChampionPool={setChampionPool}
          editable={editable}
          handleChampionSelect={handleChampionSelect}
        />
        <ChampionPoolTier
          tierSlug='match_ready'
          tierName='Prêts pour les matchs'
          championPool={championPoolLocal ? championPoolLocal : championPool}
          setChampionPool={setChampionPool}
          editable={editable}
          handleChampionSelect={handleChampionSelect}
        />
        <ChampionPoolTier
          tierSlug='scrim_ready'
          tierName='Prêts pour les scrims'
          championPool={championPoolLocal ? championPoolLocal : championPool}
          setChampionPool={setChampionPool}
          editable={editable}
          handleChampionSelect={handleChampionSelect}
        />
        <ChampionPoolTier
          tierSlug='training_required'
          tierName='Entraînement requis'
          championPool={championPoolLocal ? championPoolLocal : championPool}
          setChampionPool={setChampionPool}
          editable={editable}
          handleChampionSelect={handleChampionSelect}
        />
      </div>
    </div>
  )
}

export default ChampionPoolSingle
