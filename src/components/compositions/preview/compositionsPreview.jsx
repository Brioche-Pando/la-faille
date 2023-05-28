import React from 'react'
import ChampionIcon from '../../championIcon/ChampionIcon'

function compositionsPreview ({ storedCompositions }) {
  return (
    <div className='compositions-preview'>
      {storedCompositions ? (
        Object.entries(storedCompositions).length === 0 ? (
          <div className='compositions-preview__warning'>
            <h1>Vous n'avez aucune composition créée.</h1>
            <p>
              Commence à créer maintenant et sauvegarde tes compositions pour
              plus tard
            </p>
            <a href='/compositions/create'>Créer une nouvelle composition</a>
            <img src='./assets/img/icons/add-cross.svg' alt='add icon' />
          </div>
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
        <div className='compositions-preview__warning'>
          <img src='./assets/img/emotes/Does_Not_Compute.webp' alt='' />
          <h1 className='compositions-preview__warning-title'>Vous n'avez aucune composition créée.</h1>
          <p className='compositions-preview__warning-desc'>
            Commence à créer maintenant et sauvegarde tes compositions pour plus
            tard.
          </p>
          <a href='/compositions/create' className='button compositions-preview__warning-button'>
            Créer une nouvelle composition
            <img src='./assets/img/icons/add-cross.svg' alt='add icon' />
          </a>
        </div>
      )}
    </div>
  )
}

export default compositionsPreview
