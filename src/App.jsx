import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import SidebarLayout from './layouts/SidebarLayout'
import FullScreenLayout from './layouts/FullScreenLayout'
import Dashboard from './pages/Dashboard'
import Champion_Pool from './pages/ChampionPool'
import Match_Up from './pages/MatchUp'
import Compositions from './pages/Compositions'
import NewComposition from './pages/NewComposition'

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
    },
    {
      path: '/compositions',
      element: (
        <SidebarLayout>
          <Compositions />
        </SidebarLayout>
      )
    },
    {
      path: '/compositions/create',
      element: (
        <FullScreenLayout>
          <NewComposition />
        </FullScreenLayout>
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
