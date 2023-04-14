import React, { useEffect } from 'react'
import ChampionIcon from '../components/ChampionIcon'

function ChampionPool () {
  useEffect(() => {
    document.title = 'Champion Pool | La Faille'
  }, [])

  return (
    <div>
      <h1>Champion Pool Page</h1>
      <ChampionIcon name='aatrox' />
    </div>
  )
}

export default ChampionPool
