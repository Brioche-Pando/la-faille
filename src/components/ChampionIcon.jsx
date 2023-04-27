import React from 'react'

function ChampionIcon (props) {
  const { id, name, draggable, onDragStart } = props

  return (
    <div
      id={id}
      className='champion-icon'
      draggable={draggable}
      onDragStart={onDragStart}
    >
      <img src={`../assets/champion_icon/${name}.png`} alt={name} width={50} />
    </div>
  )
}

export default ChampionIcon
