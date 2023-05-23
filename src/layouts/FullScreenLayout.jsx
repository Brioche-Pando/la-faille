import React from 'react'

function FullScreenLayout (props) {
  return (
    <div className='fullscreenlayout'>
      <div className='content'>{props.children}</div>
    </div>
  )
}

export default FullScreenLayout
