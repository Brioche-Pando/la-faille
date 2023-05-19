import React, { useState } from 'react'

// Composant Step 1
const Step1 = ({ onNext }) => {
  // Gestion de l'état local pour les picks et champions pool
  const [picks, setPicks] = useState([])
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
      {/* Utiliser les états "picks" et "championPool" pour afficher les données */}

      {/* Bouton pour passer à l'étape suivante */}
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

// Composant Step 2
const Step2 = ({ onPrevious, onNext }) => {
  // Gestion de l'état local pour les bans, picks et match-ups
  const [bans, setBans] = useState([])
  const [picks, setPicks] = useState([])
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
      {/* Utiliser les états "bans", "picks" et "matchUps" pour afficher les données */}

      {/* Boutons pour passer à l'étape précédente ou suivante */}
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

// Composant Step 3
const Step3 = ({ onPrevious, onComplete }) => {
  // Gestion de l'état local pour le nom de la composition et le style de jeu
  const [compositionName, setCompositionName] = useState('')
  const [playStyle, setPlayStyle] = useState('')

  // Fonction de validation et complétion de la création
  const handleComplete = () => {
    // Effectuer des validations si nécessaire

    // Enregistrer la composition ou soumettre les données au backend
    // ...

    // Compléter la création
    onComplete()
  }

  return (
    <div>
      {/* Formulaire pour saisir le nom de la composition et le style de jeu */}
      {/* Utiliser les états "compositionName" et "playStyle" pour récupérer les valeurs saisies */}

      {/* Boutons pour passer à l'étape précédente ou compléter la création */}
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleComplete}>Complete</button>
    </div>
  )
}

// Composant principal du Stepper
const NewComposition = () => {
  // Gestion de l'état local pour l'étape actuelle du stepper
  const [step, setStep] = useState(1)

  // Fonction pour passer à l'étape suivante
  const nextStep = () => {
    setStep(step + 1)
  }

  // Fonction pour revenir à l'étape précédente
  const previousStep = () => {
    setStep(step - 1)
  }

  return (
    <div>
      {/* Affichage de l'étape en cours */}
      <div>Step {step}</div>

      {/* Affichage du composant correspondant à l'étape actuelle */}
      {step === 1 && <Step1 onNext={nextStep} />}
      {step === 2 && <Step2 onPrevious={previousStep} onNext={nextStep} />}
      {step === 3 && <Step3 onPrevious={previousStep} onComplete={nextStep} />}
    </div>
  )
}

export default NewComposition
