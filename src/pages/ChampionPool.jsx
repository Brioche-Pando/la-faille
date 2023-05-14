import React, { useState, useEffect } from 'react'
import ChampionPoolSingle from '../components/championPool/ChampionPoolSingle'
import ChampionSearch from '../components/championSearch/ChampionSearch'

function ChampionPool () {
  return (
    <div>
      <h1>Champion Pool Page</h1>
      <div style={{ display: 'flex' }}>
        <ChampionPoolSingle editable={true} />
        <ChampionSearch />
      </div>
    </div>
  )
}

export default ChampionPool
