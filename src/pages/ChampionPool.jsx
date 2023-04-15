import React, { useEffect } from 'react'
import ChampionPoolPlayer from '../components/ChampionPoolPlayer'
import ChampionSearch from '../components/ChampionSearch'

function ChampionPool () {
  useEffect(() => {
    document.title = 'Champion Pool | La Faille'
  }, [])

  return (
    <div>
      <h1>Champion Pool Page</h1>
      <div style={{ display: 'flex' }}>
        <ChampionPoolPlayer />
        <ChampionSearch />
      </div>
    </div>
  )
}

export default ChampionPool
