import React, { useEffect, useState } from 'react'
import CompositionPicks from '../components/compositions/picks/CompositionPicks'
import CompositionBans from '../components/compositions/bans/CompositionBans'
import CompositionValidation from '../components/compositions/validation/CompositionValidation'

// Composant principal du Stepper
const NewComposition = () => {
  // Gestion de l'état local pour l'étape actuelle du stepper
  const [step, setStep] = useState(1)
  const [picks, setPicks] = useState([])
  const [bans, setBans] = useState([])

  useEffect(() => {
    document.title = 'Nouvelle Composition | La Faille'
  }, [])

  // Fonction pour passer à l'étape suivante
  const nextStep = () => {
    setStep(step + 1)
  }

  // Fonction pour revenir à l'étape précédente
  const previousStep = () => {
    setStep(step - 1)
  }

  function handleSetPick (role, pick) {
    setPicks(prevState => {
      return {
        ...prevState,
        [role]: {
          pick: pick
        }
      }
    })
  }

  function handleSetBan (pos, ban) {
    setBans(prevState => {
      return {
        ...prevState,
        [pos]: {
          ban: ban
        }
      }
    })
  }

  return (
    <div className='new-composition'>
      {/* Affichage de l'étape en cours */}
      <ul className='new-composition__breadcrumb'>
        <li className='new-composition__breadcrumb-item'>
          <div className='new-composition__breadcrumb-item__number'>1</div>
          <div className='new-composition__breadcrumb-item__content'>
            <p className='text-bold'>Pick</p>
          </div>
        </li>
        <li className='new-composition__breadcrumb-separator'></li>
        <li className='new-composition__breadcrumb-item'>
          <div className='new-composition__breadcrumb-item__number'>2</div>
          <div className='new-composition__breadcrumb-item__content'>
            <p className='text-bold'>Ban</p>
            <span className='small'>Optionnel</span>
          </div>
        </li>
        <li className='new-composition__breadcrumb-separator'></li>
        <li className='new-composition__breadcrumb-item'>
          <div className='new-composition__breadcrumb-item__number'>3</div>
          <div className='new-composition__breadcrumb-item__content'>
            <p className='text-bold'>Validation</p>
          </div>
        </li>
      </ul>

      {/* Affichage du composant correspondant à l'étape actuelle */}
      {step === 1 && (
        <CompositionPicks
          onNext={nextStep}
          picks={picks}
          handleSetPick={handleSetPick}
        />
      )}
      {step === 2 && (
        <CompositionBans
          onPrevious={previousStep}
          onNext={nextStep}
          picks={picks}
          bans={bans}
          handleSetBan={handleSetBan}
        />
      )}
      {step === 3 && (
        <CompositionValidation
          onPrevious={previousStep}
          picks={picks}
          bans={bans}
        />
      )}
    </div>
  )
}

export default NewComposition
