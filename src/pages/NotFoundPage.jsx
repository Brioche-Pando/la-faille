import React from 'react'

function NotFoundPage () {
  return (
    <div className='notfound'>
      <h1>Erreur 404 - Page non trouvée</h1>
      <img
        src='./assets/img/emotes/Oh_No.webp'
        alt='emote peace poro'
        className='home__emote'
      />
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <a href="/" className='button'>Retourner à la page d'accueil</a>
    </div>
  )
}

export default NotFoundPage
