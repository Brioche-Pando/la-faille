import React, { useEffect } from 'react'

function Compositions () {

  function handleChampionSelect (champion) {
    setSelectedChampion(champion)
  }

  useEffect(() => {
    document.title = 'Compositions | La Faille'
  }, [])

  return (
    <>
      <h1>Compositions Page</h1>
      <a href="/compositions/create">Créer une nouvelle compositions</a>
    </>
  )
}

export default Compositions
