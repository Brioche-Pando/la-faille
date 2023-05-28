import React, { useState, useEffect } from 'react'
import ChampionPoolSingle from '../components/championPool/ChampionPoolSingle'
import ChampionSearch from '../components/championSearch/ChampionSearch'

function ChampionPool () {
  return (
    <div className='content-1x1'>
      <ChampionPoolSingle roleIcon={'support'} playerName={'Support'} editable={true} />
      <ChampionSearch />
    </div>
  )
}

export default ChampionPool
