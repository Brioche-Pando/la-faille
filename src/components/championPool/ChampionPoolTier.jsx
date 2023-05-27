import React from 'react'
import ChampionIcon from '../championIcon/ChampionIcon'

function ChampionPoolTier ({
  tierSlug,
  tierName,
  championPool,
  setChampionPool,
  editable,
  handleChampionSelect
}) {
  const handleDrop = event => {
    if (!editable) {
      return
    }
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
      className='champion-pool__tier tier-list__tier'
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className='champion-pool__rank-label tier-list__rank-label'>
        {tierName}
      </p>
      <ul className='champion-pool__rank-list tier-list__rank-list'>
        {championPool[tierSlug].length ? (
          championPool[tierSlug].map(champion => (
            <li
              key={'champion-pool-' + champion.slug}
              className='champion-pool__rank-item tier-list__rank-item'
            >
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
                <button
                  onClick={() => handleRemoveChampion(champion.id)}
                  className='champion-pool__rank-item__remove tier-list__rank-item__remove'
                ></button>
              ) : (
                ''
              )}
            </li>
          ))
        ) : editable ? (
          <li className='champion-pool__rank-item champion-pool__rank-item--empty tier-list__rank-item tier-list__rank-item--empty'>
            <img src='/src/assets/img/icons/move.svg' alt='move icon' />
            <p>Glisser-déposer vos champions dans cette catégorie</p>
          </li>
        ) : (
          <li className='champion-pool__rank-item champion-pool__rank-item--empty tier-list__rank-item tier-list__rank-item--empty'>
            <p>Aucun champion n'a été renseigné dans cette catégorie</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ChampionPoolTier
