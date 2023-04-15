import React from 'react'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Champion_Pool from './pages/ChampionPool'
import Match_Up from './pages/MatchUp'

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
        <Layout>
          <Champion_Pool />
        </Layout>
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
