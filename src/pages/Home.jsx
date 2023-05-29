import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className='home'>
      <h1 className='home__title'>Bienvenue sur <span>La Faille</span></h1>
      <img
        src='./assets/img/emotes/Peace_Poro.webp'
        alt='emote peace poro'
        className='home__emote'
      />
      <p className='home__desc'>La Faille est une plateforme regroupant de nombreux outils permettant aux équipes esport amateur de League of Legends de favoriser la convergence de leurs statégies.</p>
      <Link to='/champion-pool' className='home__button'>Je te conseille de renseigner ton champion pool pour commencer</Link>
    </div>
  )
}

export default Home
