import React, { useState } from 'react'

const CompositionBans = ({ onPrevious, onNext }) => {
  // Gestion de l'état local pour les bans, picks et match-ups
  const [bans, setBansStep] = useState([])
  const [picks, setPicksStep] = useState([])
  const [matchUps, setMatchUps] = useState([])

  // Fonction de validation et passage à l'étape suivante
  const handleNext = () => {
    // Effectuer des validations si nécessaire

    // Passer à l'étape suivante
    onNext()
  }

  return (
    <div>
      {/* Affichage des bans, picks et match-ups */}
      <h2>Bans phase</h2>
      {/* Utiliser les états "bans", "picks" et "matchUps" pour afficher les données */}

      {/* Boutons pour passer à l'étape précédente ou suivante */}
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default CompositionBans
