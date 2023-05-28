import React, { useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { redirect } from 'react-router-dom'

function CompositionValidation ({ onPrevious, picks, bans }) {
  const [compositionName, setCompositionName] = useState('')
  const [composition, setComposition] = useLocalStorage('compositions', {})

  // Fonction de validation et complétion de la création
  const handleComplete = () => {
    // Effectuer des validations si nécessaire
    if (!compositionName) {
      // Afficher une erreur pour indiquer qu'un nom de composition est requis
      console.error(
        "⛔ Une erreur s'est produite lors de l'enregistrement de votre composition"
      )
      return
    }

    // Enregistrer la composition dans le localStorage
    const compositionId = generateUniqueId()

    const compositionData = {
      name: compositionName,
      picks: picks,
      bans: bans
    }

    setComposition(prevState => {
      return {
        ...prevState,
        [compositionId]: compositionData
      }
    })

    // Redirection vers la page des compositions
    return redirect('/compositions')
  }

  // Génère un ID unique pour la composition (à titre d'exemple)
  const generateUniqueId = () => {
    return Date.now().toString()
  }

  return (
    <div className='new-composition__inner'>
      <div
        className='input__container'
        style={{
          justifyContent: 'center'
        }}
      >
        <label className='input__label h2'>
          Choisir un nom pour votre composition<sup>*</sup>
        </label>
        <input
          type='text'
          value={compositionName}
          onChange={e => setCompositionName(e.target.value)}
          className='input__input'
        />
        {/* Affichage helper */}
        {compositionName === '' && (
          <p className='input__helper small'>
            Veuillez saisir un nom pour la composition.
          </p>
        )}
      </div>

      {/* Boutons pour passer à l'étape précédente ou compléter la création */}

      <div className='new-composition__buttons'>
        <button onClick={onPrevious}>Previous</button>
        <span className='new-composition__buttons-separator'></span>
        <button onClick={handleComplete} disabled={compositionName === ''}>
          Sauvegarder
        </button>
      </div>
    </div>
  )
}

export default CompositionValidation
