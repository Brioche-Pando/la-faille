import React from 'react'
import ChampionSearch from '../../championSearch/ChampionSearch'

const CompositionSinglePick = ({ roleIcon, rolePlayer = 'Pseudo' }) => {
  function handleAddChampion(champions) {
    console.log(champions);
  }
  return (
    <div>
      {/* Icône du poste du joueur */}
      <figure style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`../src/assets/img/role_icons/${roleIcon}.svg`}
          alt={roleIcon}
          width={18}
          height={18}
          style={{ margin: '7px' }}
        />
        <figcaption style={{ textTransform: 'capitalize' }}>
          {rolePlayer}
        </figcaption>
      </figure>
      <div
          id={'modal-' + roleIcon}
          className='search-modal search-modal--hidden'
        >
          <ChampionSearch
            isModal={true}
            handleChampionSelect={handleAddChampion}
          />
        </div>
    </div>
  )
}

export default CompositionSinglePick
