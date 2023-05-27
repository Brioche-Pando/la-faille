import React, { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import CompositionsPreview from '../components/compositions/preview/compositionsPreview'

function Compositions () {
  // Récupérer les compositions depuis le localStorage
  const storedCompositions = useLocalStorage('compositions')[0]

  useEffect(() => {
    document.title = 'Compositions | La Faille'
  }, [])

  return (
    <div className='compositions'>
      <a href='/compositions/create' className='compositions__button'>Créer une nouvelle composition</a>
      <CompositionsPreview storedCompositions={storedCompositions} />
    </div>
  )
}

export default Compositions
