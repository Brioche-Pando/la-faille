import React from 'react'
import ChampionIcon from '../ChampionIcon'

function ChampionPoolTier (props) {
  const { tierName, champions, setChampions } = props

  const handleDrop = event => {
    event.preventDefault()
    const championId = event.dataTransfer.getData('championId')
    const championSlug = event.dataTransfer.getData('championSlug')

    const championAlreadyExist = champions.find(
      champion => champion.slug === championSlug
    )

    // Si le champion n'est pas dans le champion pool
    if (!championAlreadyExist) {
      // Création du nouveau champion
      const newChampion = {
        id: championId,
        slug: championSlug,
        tier: tierName
      }
      // Ajout à la liste de champions
      setChampions([...champions, newChampion])

      // Si il est déjà dans le champion pool
    } else if (championAlreadyExist.tier !== tierName) {
      // Changement du tier du champion si besoin
      const updatedChampions = champions.map(newChampion =>
        newChampion.slug === championAlreadyExist.slug
          ? { ...newChampion, tier: tierName }
          : newChampion
      )
      // Mise à jour de la liste de champions
      setChampions(updatedChampions)
    }
  }

  const handleDragStart = (event, championId, championSlug, championTier) => {
    event.dataTransfer.setData('championId', championId)
    event.dataTransfer.setData('championSlug', championSlug)
    event.dataTransfer.setData('championTier', championTier)
  }

  const handleDragOver = event => {
    event.preventDefault()
    const championTier = event.dataTransfer.getData('championTier')
    if (championTier !== tierName) {
      event.dataTransfer.dropEffect = 'move'
    }
  }

  const handleRemoveChampion = championIdToRemove => {
    setChampions(
      champions.filter(champion => champion.id !== championIdToRemove)
    )
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
          minWidth: '450px',
          border: '1px solid black'
        }}
      >
        {champions
          .filter(c => c.tier === tierName)
          .map(champion => (
            <li key={champion.slug}>
              <ChampionIcon
                id={champion.id}
                name={champion.slug}
                draggable
                onDragStart={e =>
                  handleDragStart(e, champion.id, champion.slug, champion.tier)
                }
              />
              <span>{champion.name}</span>
              <button onClick={() => handleRemoveChampion(champion.id)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ChampionPoolTier
