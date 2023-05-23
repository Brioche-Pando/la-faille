import React, { useEffect, useState } from 'react'
import ChampionSearch from '../../championSearch/ChampionSearch'

const CompositionSinglePick = ({
  role,
  pseudoPlayer = 'Pseudo',
  picks,
  handleSetPick = null,
  isPreview = false
}) => {
  const [selectedChampion, setSelectedChampion] = useState()

  useEffect(() => {
    // Vérifier si un pick a déjà été fait pour le poste et le mettre à jour dans selectedChampion
    if (picks && picks[role] && picks[role].pick) {
      setSelectedChampion(picks[role].pick)
    }
  }, [picks[role]])

  function handleAddChampion (champion) {
    document
      .getElementById('modal-' + role)
      .classList.toggle('search-modal--hidden')
    setSelectedChampion(champion)
    handleSetPick(role, champion)
  }

  return (
    <div>
      {isPreview && <p>Rappel des picks</p>}
      <figure
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontWeight: 'bold',
          margin: '0 0 16px'
        }}
      >
        <img
          src={`../src/assets/img/role_icons/${role}.svg`}
          alt={role}
          width={18}
          height={18}
          style={{ margin: '7px' }}
        />
        <figcaption style={{ textTransform: 'capitalize' }}>
          {pseudoPlayer}
        </figcaption>
      </figure>
      <figure
        style={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          margin: '0'
        }}
        onClick={() => {
          document
            .getElementById('modal-' + role)
            .classList.toggle('search-modal--hidden')
        }}
      >
        {selectedChampion ? (
          <img
            src={
              '../src/assets/champion_icon/' + selectedChampion.slug + '.png'
            }
            alt={selectedChampion.slug}
          />
        ) : (
          <img src='../src/assets/img/icons/add.svg' alt='' />
        )}

        <figcaption>
          {selectedChampion
            ? selectedChampion.name
            : 'Sélectionner un champion'}
        </figcaption>
      </figure>
      {isPreview || (
        <div id={'modal-' + role} className='search-modal search-modal--hidden'>
          <ChampionSearch handleChampionSelect={handleAddChampion} />
        </div>
      )}
    </div>
  )
}

export default CompositionSinglePick
