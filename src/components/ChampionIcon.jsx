import React from 'react'

function ChampionIcon (props) {
  return <img src={`../assets/champion_icon/${props.name}.png`} alt={props.name} />
}

export default ChampionIcon
