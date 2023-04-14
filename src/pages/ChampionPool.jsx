import React, { useEffect } from 'react'
import ChampionSearch from '../components/ChampionSearch'

function ChampionPool () {
  useEffect(() => {
    document.title = 'Champion Pool | La Faille'
  }, [])

  return (
    <div>
      <h1>Champion Pool Page</h1>
      <ChampionSearch />
    </div>
  )
}

export default ChampionPool
