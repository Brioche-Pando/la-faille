import React, { useEffect } from 'react'

function MatchUp () {
  useEffect(() => {
    document.title = 'Match Up | La Faille'
  }, [])

  return (
    <>
      <h1>Match Up Page</h1>
    </>
  )
}

export default MatchUp
