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
    <div className='new-composition__chose-container'>
      <figure className='new-composition__chose-title'>
        <img
          src={`../src/assets/img/role_icons/${role}.svg`}
          alt={role}
          width={18}
          height={18}
        />
        <figcaption>
          {isPreview && 'Pick '}
          {pseudoPlayer}
        </figcaption>
      </figure>
      <figure
        className='new-composition__chose-button'
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
          <div className='search-modal__inner'>
            <ChampionSearch
              isModal={true}
              handleChampionSelect={handleAddChampion}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default CompositionSinglePick
