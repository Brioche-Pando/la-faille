import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className='home'>
      <div className='home__inner'>
        <h1 className='home__title'>Bienvenue sur La Faille !</h1>
        <img
          src='./assets/img/emotes/Peace_Poro.webp'
          alt='emote peace poro'
          className='home__emote'
        />
        <h2>Qu'est-ce que La Faille ?</h2>
        <p>
          La Faille est une plateforme dédiée à l'optimisation des stratégies
          des équipes esport amateures de League of Legends. Son objectif est
          d'aider les équipes et les joueurs à maximiser leur potentiel en
          proposant des outils créer spécifiquement pour ces équipes afin de les
          aider à centraliser leurs données et à les utiliser.
        </p>

        <h2>Fonctionnalités principales</h2>
        <ul>
          <li>
            Chaque joueur renseigne son <a href="/champion-pool" className='home__button'>champion pool</a> dans un classement conçu
            spécialement pour les équipes.
          </li>
          <li>
            En se basant sur le champion pool, chaque joueur peut renseigner les <a href="/match-up" className='home__button'>match-up</a> de ses champions préférés.
          </li>
          <li>
            Découvrez la création de <a href="/champion-pool" className='home__button'>compositions</a> qui se basera sur les
            champions-pool et match-up de chaque membre de l'équipe.
          </li>
        </ul>

        <h2>Version alpha et phase de test</h2>
        <p>
          La Faille est actuellement en version test. Votre participation est
          essentielle pour m'aider à améliorer la plateforme et à la rendre
          encore plus performante. Vos retours et suggestions sont les bienvenus
          !
        </p>

        <h2>Testez La Faille dès maintenant</h2>
        <p>
          Je vous invite donc à tester la plateforme dans son état actuel et à
          me faire part de vos retours. Vous pouvez me contacter via Discord
          [Brioche 🍞#2616].
        </p>
        <p>
          Dans cette première version, vous êtes par défaut au rôle de support,
          les données des 4 autres rôles de l'équipe sont déjà renseignées pour
          feindre le résultat final. Ainsi, aucune connexion n'est nécessaire.
        </p>
      </div>
    </div>
  )
}

export default Home
