import React from 'react'
import ChampionIcon from '../ChampionIcon'

function ChampionPoolTier ({
  tierSlug,
  tierName,
  championPool,
  setChampionPool,
  editable,
  handleChampionSelect
}) {
  const handleDrop = event => {
    if (editable) {
      event.preventDefault()
      const championId = event.dataTransfer.getData('championId')
      const championSlug = event.dataTransfer.getData('championSlug')

      let championAlreadyExist = false

      for (const tierSlug in championPool) {
        const championsInTier = championPool[tierSlug]
        const foundChampion = championsInTier.find(
          champion => champion.slug === championSlug
        )
        if (foundChampion) {
          championAlreadyExist = foundChampion
          break
        }
      }

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
        // Suppression du champion de son ancien tier
        const oldChampions = championPool[championAlreadyExist.tier].filter(
          champion => champion.slug !== championSlug
        )
        const newChampionPool = {
          ...championPool,
          [championAlreadyExist.tier]: oldChampions
        }

        // Changement du tier du champion
        const updatedChampion = { ...championAlreadyExist, tier: tierSlug }

        // Ajout du champion à son nouveau tier
        const newChampions = [...championPool[tierSlug], updatedChampion]
        newChampionPool[tierSlug] = newChampions

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
              champion={champion}
              draggable={editable}
              onDragStart={e =>
                handleDragStart(e, champion.id, champion.slug, champion.tier)
              }
              onChampionSelect={handleChampionSelect}
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
