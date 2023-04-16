import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Champion_Pool from './pages/ChampionPool'
import Match_Up from './pages/MatchUp'
import { ChampionStoreProvider } from './store/StoreChampionPool'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      )
    },
    {
      path: '/champion-pool',
      element: (
        <ChampionStoreProvider>
          <Layout>
            <Champion_Pool />
          </Layout>
        </ChampionStoreProvider>
      )
    },
    {
      path: 'match-up',
      element: (
        <Layout>
          <Match_Up />
        </Layout>
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
