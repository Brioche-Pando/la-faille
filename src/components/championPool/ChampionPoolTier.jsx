import React from 'react'
import ChampionIcon from '../ChampionIcon'

function ChampionPoolTier ({
  tierSlug,
  tierName,
  championPool,
  setChampionPool,
  editable
}) {
  const handleDrop = event => {
    if (editable) {
      event.preventDefault()
      const championId = event.dataTransfer.getData('championId')
      const championSlug = event.dataTransfer.getData('championSlug')

      const championAlreadyExist = championPool[tierSlug].find(
        champion => champion.slug === championSlug
      )

      // Si le champion n'est pas dans le champion pool
      if (!championAlreadyExist) {
        // Création du nouveau champion
        const newChampion = {
          id: championId,
          slug: championSlug,
          tier: tierSlug
        }

        // Ajout à la liste de champions
        const newChampionTabs = [...championPool[tierSlug], newChampion]
        const newChampionPool = { ...championPool, [tierSlug]: newChampionTabs }
        setChampionPool(newChampionPool)

        // Si il est déjà dans le champion pool
      } else if (championAlreadyExist.tier !== tierSlug) {
        // Changement du tier du champion si besoin
        const updatedChampions = championPool.map(newChampion =>
          newChampion.slug === championAlreadyExist.slug
            ? { ...newChampion, tier: tierSlug }
            : newChampion
        )
        // Mise à jour de la liste de champions
        const newChampionPool = {
          ...championPool,
          [tierSlug]: updatedChampions
        }
        setChampionPool(newChampionPool)
      }
    } else {
      return false
    }
  }

  const handleDragStart = (event, championId, championSlug, championTier) => {
    if (editable) {
      event.dataTransfer.setData('championId', championId)
      event.dataTransfer.setData('championSlug', championSlug)
      event.dataTransfer.setData('championTier', championTier)
    } else {
      return false
    }
  }

  const handleDragOver = event => {
    if (editable) {
      event.preventDefault()
      const championTier = event.dataTransfer.getData('championTier')
      if (championTier !== tierSlug) {
        event.dataTransfer.dropEffect = 'move'
      }
    } else {
      return false
    }
  }

  const handleRemoveChampion = championIdToRemove => {
    setChampionPool(prevChampionPool => {
      const newChampionPool = { ...prevChampionPool }
      newChampionPool[tierSlug] = prevChampionPool[tierSlug].filter(
        champion => champion.id !== championIdToRemove
      )
      return newChampionPool
    })
  }

  return (
    <div
      className='champion-pool-tier'
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2>{tierName}</h2>
      <ul
        style={{
          minHeight: '150px',
          minWidth: '250px',
          border: '1px solid black'
        }}
      >
        {championPool[tierSlug].map(champion => (
          <li key={champion.slug}>
            <ChampionIcon
              id={champion.id}
              name={champion.slug}
              draggable={editable}
              onDragStart={e =>
                handleDragStart(e, champion.id, champion.slug, champion.tier)
              }
            />
            <span>{champion.name}</span>
            {editable ? (
              <button onClick={() => handleRemoveChampion(champion.id)}>
                Remove
              </button>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChampionPoolTier
