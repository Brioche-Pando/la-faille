import React from 'react'
import Sidebar from '../components/Sidebar'

function SidebarLayout (props) {
  return (
    <div className='sidebarlayout'>
      <Sidebar />
      <>{props.children}</>
    </div>
  )
}

export default SidebarLayout
