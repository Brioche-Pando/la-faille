import React, { useState } from 'react'
import ChampionPoolTier from './ChampionPoolTier'
import ChampionSearch from './ChampionSearch'

function ChampionPoolPlayer (props) {
  const { roleIcon, playerName } = props

  const [champions, setChampions] = useState([])

  const handleSetChampions = newChampions => {
    setChampions(newChampions)
  }

  return (
    <div className='champion-pool'>
      <div className='champion-pool-header'>
        <img src={roleIcon} alt='Role Icon' />
        <h2>{playerName}</h2>
      </div>
      <div className='champion-pool-body'>
        <div className='champion-pool-tiers'>
          <ChampionPoolTier
            tierName='Meilleurs champions'
            champions={champions}
            setChampions={handleSetChampions}
          />
          <ChampionPoolTier
            tierName='Prêts pour les matchs'
            champions={champions}
            setChampions={handleSetChampions}
          />
          <ChampionPoolTier
            tierName='Prêts pour les scrims'
            champions={champions}
            setChampions={handleSetChampions}
          />
          <ChampionPoolTier
            tierName='Entraînement requis'
            champions={champions}
            setChampions={handleSetChampions}
          />
        </div>
      </div>
    </div>
  )
}

export default ChampionPoolPlayer
