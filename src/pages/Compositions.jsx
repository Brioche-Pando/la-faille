import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import ChampionIcon from '../components/ChampionIcon'

function Compositions () {
  // Récupérer les compositions depuis le localStorage
  const storedCompositions = useLocalStorage('compositions')[0]

  useEffect(() => {
    document.title = 'Compositions | La Faille'
  }, [])

  return (
    <>
      <h1>Compositions Page</h1>
      <a href='/compositions/create'>Créer une nouvelle composition</a>

      {Object.entries(storedCompositions).length === 0 ? (
        <>
          <p>Aucune composition n'a été créée pour le moment.</p>
          <a href='/compositions/create'>Créer une nouvelle composition</a>
        </>
      ) : (
        <ul>
          <li>

          </li>
          {Object.entries(storedCompositions).map(composition => (
            <div key={composition[0]}>
              <h3>{composition[1].name}</h3>
              PICK
              {Object.entries(composition[1].picks).map(pick => (
                <ChampionIcon key={pick[0]} champion={pick[1].pick}/>
              ))}
              BAN
              {Object.entries(composition[1].bans).map(ban => (
                <ChampionIcon key={ban[0]} champion={ban[1].ban} />
              ))}
            </div>
          ))}
        </ul>
      )}
    </>
  )
}

export default Compositions
