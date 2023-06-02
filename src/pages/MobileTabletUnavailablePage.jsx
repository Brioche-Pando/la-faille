import React from 'react'

function MobileTabletUnavailablePage () {
  return (
    <div className='unavailable-page'>
      <h1>Désolé, ce site n'est pas disponible sur mobile et tablette.</h1>
      <img
        src='./assets/img/emotes/Oh_No.webp'
        alt='emote peace poro'
        className='home__emote'
      />
      <p>
        La version mobile et tablette de La Faille n'est actuellement pas
        disponible. Veuillez utiliser un ordinateur pour accéder au site.
      </p>
    </div>
  )
}

export default MobileTabletUnavailablePage
