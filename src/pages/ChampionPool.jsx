import React, { useState, useEffect } from 'react'
import ChampionPoolPlayer from '../components/championPool/ChampionPoolPlayer'
import ChampionSearch from '../components/championSearch/ChampionSearch'

function ChampionPool () {
  return (
    <div>
      <h1>Champion Pool Page</h1>
      <div style={{ display: 'flex' }}>
        <ChampionPoolPlayer editable={true} />
        <ChampionSearch />
      </div>
    </div>
  )
}

export default ChampionPool
