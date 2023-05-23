import React from 'react'

function ChampionIcon ({
  champion,
  draggable = false,
  onDragStart = null,
  onChampionSelect = null
}) {
  return (
    <div
      id={champion.id}
      className='champion-icon'
      draggable={draggable}
      onDragStart={onDragStart}
    >
      {onChampionSelect ? (
        <img
          onClick={() => onChampionSelect(champion)}
          src={`../src/assets/champion_icon/${champion.slug}.png`}
          alt={champion.slug}
          width={50}
        />
      ) : (
        <img
          src={`../src/assets/champion_icon/${champion.slug}.png`}
          alt={champion.slug}
          width={50}
        />
      )}
    </div>
  )
}

export default ChampionIcon
