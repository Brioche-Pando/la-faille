import React from 'react'
import ChampionIcon from './ChampionIcon'

function ChampionPoolTier (props) {
  const { tierName, champions, setChampions } = props

  const handleDrop = event => {
    event.preventDefault()
    const championSlug = event.dataTransfer.getData('championSlug')
    const champion = champions.find(champion => champion.slug === championSlug)
    if (!champion) {
      const newChampion = {
        slug: championSlug,
        tier: tierName
      }
      setChampions([...champions, newChampion])
    }
  }

  const handleDragOver = event => {
    event.preventDefault()
  }

  const handleDragStart = (event, championSlug) => {
    event.dataTransfer.setData('championSlug', championSlug)
  }

  const handleRemoveChampion = championSlug => {
    const newChampions = champions.filter(c => c.slug !== championSlug)
    setChampions(newChampions)
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
                onDragStart={e => handleDragStart(e, champion.slug)}
              />
              <span>{champion.name}</span>
              <button onClick={() => handleRemoveChampion(champion.slug)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ChampionPoolTier
