import React, { useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { redirect } from "react-router-dom";

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
    return redirect("/compositions");
  }

  // Génère un ID unique pour la composition (à titre d'exemple)
  const generateUniqueId = () => {
    return Date.now().toString()
  }

  return (
    <div>
      {/* Formulaire pour saisir le nom de la composition */}
      <label>Choisir un nom pour votre composition*</label>
      <input
        type='text'
        value={compositionName}
        onChange={e => setCompositionName(e.target.value)}
      />

      {/* Affichage des erreurs */}
      {compositionName === '' && (
        <p>Veuillez saisir un nom pour la composition.</p>
      )}

      {/* Boutons pour passer à l'étape précédente ou compléter la création */}
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleComplete} disabled={compositionName === ''}>
        Complete
      </button>
    </div>
  )
}

export default CompositionValidation
