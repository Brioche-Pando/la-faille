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
    <div className='content-1x1'>
      <ChampionPoolSingle handleChampionSelect={handleChampionSelect} />
      <MatchUpSingle selectedChampion={selectedChampion} />
    </div>
  )
}

export default MatchUp
