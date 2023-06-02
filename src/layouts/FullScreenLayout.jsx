import React from 'react'

function FullScreenLayout (props) {
  return (
    <div className='fullscreen-layout'>
      <div className='content'>{props.children}</div>
    </div>
  )
}

export default FullScreenLayout
