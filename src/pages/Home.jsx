import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <section>
      <h1>Bienvenue sur LA FAILLE</h1>
      <Link to="/champion-pool">Commence ta visite par ton champion pool</Link>
    </section>
  )
}

export default Home
