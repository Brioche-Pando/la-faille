import React, { useEffect, useState } from 'react'
import ChampionPoolSingle from '../components/championPool/ChampionPoolSingle'
import MatchUpSingle from '../components/matchUp/MatchUpSingle'

function MatchUp () {
  const [selectedChampion, setSelectedChampion] = useState(null)

  function handleChampionSelect (champion) {
    setSelectedChampion(champion)
  }

  useEffect(() => {
    document.title = 'Match Up | La Faille'
  }, [])

  return (
    <>
      <h1>Match Up Page</h1>
      <div style={{ display: 'flex' }}>
        <ChampionPoolSingle handleChampionSelect={handleChampionSelect} />
        <MatchUpSingle selectedChampion={selectedChampion} />
      </div>
    </>
  )
}

export default MatchUp
