import React, { useState } from 'react'
import CompositionPicks from '../components/compositions/picks/CompositionPicks'
import CompositionBans from '../components/compositions/bans/CompositionBans'

// Composant Step 3
const ValidationStep = ({ onPrevious, onComplete }) => {
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
  const [picks, setPicks] = useState([])
  const [bans, setBans] = useState()

  // Fonction pour passer à l'étape suivante
  const nextStep = () => {
    setStep(step + 1)
  }

  // Fonction pour revenir à l'étape précédente
  const previousStep = () => {
    setStep(step - 1)
  }

  function handleSetPicks (role, pick) {
    setPicks(prevState => {
      return {
        ...prevState,
        [role]: {
          pick: pick
        }
      }
    })
  }

  function handleSetBans (pos, pick) {
    setBans(prevState => {
      return {
        ...prevState,
        [pos]: {
          pick: pick
        }
      }
    })
  }

  return (
    <div>
      {/* Affichage de l'étape en cours */}
      <div>Step {step}</div>

      {/* Affichage du composant correspondant à l'étape actuelle */}
      {step === 1 && (
        <CompositionPicks onNext={nextStep} handleSetPicks={handleSetPicks} />
      )}
      {step === 2 && (
        <CompositionBans onPrevious={previousStep} onNext={nextStep} handleSetBans={handleSetBans} />
      )}
      {step === 3 && (
        <ValidationStep onPrevious={previousStep} onComplete={nextStep} />
      )}
    </div>
  )
}

export default NewComposition
