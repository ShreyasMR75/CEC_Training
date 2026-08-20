import React from 'react'
import './styles.css'
import Layout from './components/Layout'
import DashboardHome from './components/DashboardHome'
import CropRecommendation from './components/CropRecommendation'

export default function App() {
  const hash = (typeof window !== 'undefined' && window.location.hash) || '#/'
  let page = 'home'
  if (hash.startsWith('#/crop')) page = 'crop'

  return (
    <Layout>
      {page === 'home' && <DashboardHome />}
      {page === 'crop' && <CropRecommendation />}
    </Layout>
  )
}
