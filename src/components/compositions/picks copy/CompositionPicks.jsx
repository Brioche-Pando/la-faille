import React, { useState } from 'react'

const CompositionPicks = ({ onNext }) => {
  // Gestion de l'état local pour les picks et champions pool
  const [picks, setPicksStep] = useState([])
  const [championPool, setChampionPool] = useState([])

  // Fonction de validation et passage à l'étape suivante
  const handleNext = () => {
    // Effectuer des validations si nécessaire

    // Passer à l'étape suivante
    onNext()
  }

  return (
    <div>
      {/* Affichage des choix de picks et champions pool */}
      <h2>Picks phase</h2>
      {/* Utiliser les états "picks" et "championPool" pour afficher les données */}

      {/* Bouton pour passer à l'étape suivante */}
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default CompositionPicks
