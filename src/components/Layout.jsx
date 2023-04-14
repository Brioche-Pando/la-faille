import React from 'react'
import Sidebar from './Sidebar'

function Layout (props) {
  return (
    <div className='layout'>
      <Sidebar />
      <>{props.children}</>
    </div>
  )
}

export default Layout
