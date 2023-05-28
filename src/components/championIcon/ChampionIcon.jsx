import React from 'react'

function ChampionIcon ({
  champion,
  draggable = false,
  onDragStart = null,
  onChampionSelect = null
}) {
  return (
    <figure
      id={champion.id}
      className='champion-icon'
      draggable={draggable}
      onDragStart={onDragStart}
    >
      {onChampionSelect ? (
        <img
          onClick={() => onChampionSelect(champion)}
          src={`../public/assets/champion_icon/${champion.slug}.png`}
          alt={champion.slug}
          className='champion-icon__img'
        />
      ) : (
        <img
          src={`../public/assets/champion_icon/${champion.slug}.png`}
          alt={champion.slug}
          className='champion-icon__img'
        />
      )}
    </figure>
  )
}

export default ChampionIcon
