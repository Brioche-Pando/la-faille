import React from 'react'
import Sidebar from './Sidebar'

function Layout (props) {
  return (
    <>
      <Sidebar />
      <div>{props.children}</div>
    </>
  )
}

export default Layout
