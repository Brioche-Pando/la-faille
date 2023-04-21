import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'

function SidebarLayout (props) {
  return (
    <div className='sidebarlayout'>
      <Sidebar />
      <div className='content'>{props.children}</div>
    </div>
  )
}

export default SidebarLayout
