import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import SidebarLayout from './layouts/SidebarLayout'
import FullScreenLayout from './layouts/FullScreenLayout'
import Home from './pages/Home'
import Champion_Pool from './pages/ChampionPool'
import Match_Up from './pages/MatchUp'
import Compositions from './pages/Compositions'
import NewComposition from './pages/NewComposition'
import MobileTabletUnavailablePage from './pages/MobileTabletUnavailablePage';
import NotFoundPage from './pages/NotFoundPage'


function App () {
  const isMobileOrTablet = window.matchMedia('(max-width: 768px)').matches

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <SidebarLayout>
          <Home />
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
    },
    {
      path: '*',
      element: (
        <SidebarLayout>
          <NotFoundPage />
        </SidebarLayout>
      )
    }
  ])

  return (
    <>
      {isMobileOrTablet ? (
        <MobileTabletUnavailablePage />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  )
}

export default App
