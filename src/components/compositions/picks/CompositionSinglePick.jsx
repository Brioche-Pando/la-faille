import React, { useState } from 'react'
import ChampionSearch from '../../championSearch/ChampionSearch'

const CompositionSinglePick = ({ role, pseudoPlayer = 'Pseudo', handleSetPicks }) => {
  const [selectedChampion, setSelectedChampion] = useState()

  function handleAddChampion (champion) {
    document.getElementById('modal-' + role).classList.toggle('search-modal--hidden')
    setSelectedChampion(champion)
    handleSetPicks(role, champion)
  }

  return (
    <div>
      {/* Icône du poste du joueur */}
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
      <div
        id={'modal-' + role}
        className='search-modal search-modal--hidden'
      >
        <ChampionSearch
          handleChampionSelect={handleAddChampion}
        />
      </div>
    </div>
  )
}

export default CompositionSinglePick
