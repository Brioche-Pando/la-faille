import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import SidebarLayout from './layouts/SidebarLayout'
import Dashboard from './pages/Dashboard'
import Champion_Pool from './pages/ChampionPool'
import Match_Up from './pages/MatchUp'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <SidebarLayout>
          <Dashboard />
        </SidebarLayout>
      )
    },
    {
      path: '/champion-pool',
      element: (
        <SidebarLayout>
          <Champion_Pool />
        </SidebarLayout>
      )
    },
    {
      path: 'match-up',
      element: (
        <SidebarLayout>
          <Match_Up />
        </SidebarLayout>
      )
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
