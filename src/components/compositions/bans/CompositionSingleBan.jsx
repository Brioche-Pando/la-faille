import React, { useEffect, useState } from 'react'
import ChampionSearch from '../../championSearch/ChampionSearch'

const CompositionSingleBan = ({ number, bans, handleSetBan = null }) => {
  const [selectedChampion, setSelectedChampion] = useState()

  useEffect(() => {
    // Vérifier si un ban a déjà été fait pour le ce numéro et le mettre à jour dans selectedChampion
    if (bans && bans[number] && bans[number].pick) {
      setSelectedChampion(bans[number].pick)
    }
  }, [bans[number]])

  function handleAddChampion (champion) {
    document
      .getElementById('modal-' + number)
      .classList.toggle('search-modal--hidden')
    setSelectedChampion(champion)
    handleSetBan(number, champion)
  }

  return (
    <div className='new-composition__chose-container'>
      <h2 className='new-composition__chose-title'>Ban N°{number}</h2>
      <figure
        className='new-composition__chose-button'
        onClick={() => {
          document
            .getElementById('modal-' + number)
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
      <div id={'modal-' + number} className='search-modal search-modal--hidden'>
        <div className='search-modal__inner'>
          <ChampionSearch
            isModal={true}
            handleChampionSelect={handleAddChampion}
          />
        </div>
      </div>
    </div>
  )
}

export default CompositionSingleBan
