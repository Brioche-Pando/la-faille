import React, { useEffect } from 'react'
import ChampionPoolPlayer from '../components/championPool/ChampionPoolPlayer'

function MatchUp () {
  useEffect(() => {
    document.title = 'Match Up | La Faille'
  }, [])

  return (
    <>
      <h1>Match Up Page</h1>
      <ChampionPoolPlayer />
    </>
  )
}

export default MatchUp
