import React from 'react'
import ChampionIcon from './ChampionIcon'
import { useChampionContext } from '../store/StoreChampionPool'

function ChampionPoolTier (props) {
  const { tierName } = props
  const { champions, handleMoveChampion } = useChampionContext()

  const handleDrop = event => {
    event.preventDefault()
    const championSlug = event.dataTransfer.getData('championSlug')
    handleMoveChampion(championSlug, tierName)
  }

  const handleDragOver = event => {
    event.preventDefault()
    const championTier = event.dataTransfer.getData('championTier')
    if (championTier !== tierName) {
      event.dataTransfer.dropEffect = 'move'
    }
  }

  const handleDragStart = (event, championSlug, championTier) => {
    event.dataTransfer.setData('championSlug', championSlug)
    event.dataTransfer.setData('championTier', championTier)
  }

  return (
    <div
      className='champion-pool-tier'
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2>{tierName}</h2>
      <ul style={{ minHeight: '150px', border: '1px solid black' }}>
        {champions
          .filter(c => c.tier === tierName)
          .map(champion => (
            <li key={champion.slug}>
              <ChampionIcon
                key={champion.slug + '-tier'}
                name={champion.slug}
                draggable
                onDragStart={e =>
                  handleDragStart(e, champion.slug, champion.tier)
                }
              />
              <span>{champion.name}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ChampionPoolTier
