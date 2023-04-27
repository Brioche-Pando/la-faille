import React, { useState, useEffect } from 'react'
import ChampionPoolPlayer from '../components/championPool/ChampionPoolPlayer'
import ChampionSearch from '../components/championSearch/ChampionSearch'

function ChampionPool () {
  const [championPool, setChampionPool] = useState({
    best_champion: [],
    match_ready: [],
    scrim_ready: [],
    training_needed: []
  })
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true)

  useEffect(() => {
    document.title = 'Champion Pool | La Faille'
  }, [])

  const handleUpdateChampions = newChampions => {
    console.log(newChampions);
    setChampionPool(prevState => ({
      ...prevState,
      best_champion: newChampions.filter(champion => champion.tier === 'Meilleurs champions'),
      match_ready: newChampions.filter(champion => champion.tier === 'Prêts pour les matchs'),
      scrim_ready: newChampions.filter(champion => champion.tier === 'Prêts pour les scrims'),
      training_needed: newChampions.filter(champion => champion.tier === 'Entraînement requis')
    }))
    setIsSaveButtonDisabled(false)
    
    console.log(championPool);
  }

  const handleSaveChampionPool = () => {
    const json = JSON.stringify(championPool)

    fetch('./src/data/championPool.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    })
      .then(response => {
        if (response.ok) {
          console.log('Champion pool saved!')
          setIsSaveButtonDisabled(true)
        } else {
          throw new Error('Failed to save champion pool')
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div>
      <h1>Champion Pool Page</h1>
      <button disabled={isSaveButtonDisabled} onClick={handleSaveChampionPool}>
        Sauvegarder mes changements
      </button>
      <div style={{ display: 'flex' }}>
        <ChampionPoolPlayer onUpdateChampions={handleUpdateChampions} />
        <ChampionSearch />
      </div>
    </div>
  )
}

export default ChampionPool
