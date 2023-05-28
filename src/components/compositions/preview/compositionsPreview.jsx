import React from 'react'
import ChampionIcon from '../../championIcon/ChampionIcon'

function compositionsPreview ({ storedCompositions }) {
  return (
    <div className='compositions-preview'>
      {storedCompositions ? (
        Object.entries(storedCompositions).length === 0 ? (
          <>
            <p>Aucune composition n'a été créée pour le moment.</p>
            <a href='/compositions/create'>Créer une nouvelle composition</a>
          </>
        ) : (
          <ul className='compositions-preview__list'>
            <li className='compositions-preview__header'>
              <h3>Nom</h3>
              <h3>Picks</h3>
              <h3>Bans</h3>
            </li>
            {Object.entries(storedCompositions).map(composition => (
              <li key={composition[0]} className='compositions-preview__item'>
                <h3 className='compositions-preview__title'>
                  {composition[1].name}
                </h3>
                <div className='compositions-preview__picks'>
                  {Object.entries(composition[1].picks).map(pick => (
                    <ChampionIcon key={pick[0]} champion={pick[1].pick} />
                  ))}
                </div>
                <div className='compositions-preview__bans'>
                  {Object.entries(composition[1].bans).map(ban => (
                    <ChampionIcon key={ban[0]} champion={ban[1].ban} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )
      ) : (
        <div>Message informatif de l'information du manque d'informations</div>
      )}
    </div>
  )
}

export default compositionsPreview
