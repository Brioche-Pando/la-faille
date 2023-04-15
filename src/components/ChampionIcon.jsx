import React from 'react'

function ChampionIcon (props) {
  const { name, id, draggable, onDragStart } = props

  return (
    <div
      id={id}
      className='champion-icon'
      draggable={draggable}
      onDragStart={onDragStart}
    >
      <img src={`../assets/champion_icon/${name}.png`} alt={name} />
    </div>
  )
}

export default ChampionIcon
