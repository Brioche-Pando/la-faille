import React, { useState } from 'react'
import ChampionPoolTier from './ChampionPoolTier'
import useLocalStorage from '../../hooks/useLocalStorage'

function ChampionPoolSingle ({
  roleIcon,
  playerName = 'Pseudo',
  editable = false,
  isPreview = false,
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
    <div className={isPreview ? 'champion-pool tier-list tier-list--preview' : 'champion-pool tier-list'}>
      <div className='champion-pool__header tier-list__header'>
        {!isPreview ? (
          <>
            <img
              src={'src/assets/img/role_icons/' + roleIcon + '.svg'}
              alt='Role Icon'
            />
            <h3>{playerName}</h3>
          </>
        ) : (
          <h3>Champion Pool</h3>
        )}
      </div>
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
  )
}

export default ChampionPoolSingle
