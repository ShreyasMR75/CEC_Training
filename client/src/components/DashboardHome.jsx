import React from 'react'
import WeatherCard from './cards/WeatherCard'
import SoilCard from './cards/SoilCard'
import CropRecCard from './cards/CropRecCard'
import FertilizerCard from './cards/FertilizerCard'
import IrrigationCard from './cards/IrrigationCard'
import DiseaseCard from './cards/DiseaseCard'
import RecentActivity from './RecentActivity'
import Alerts from './Alerts'

export default function DashboardHome(){
  return (
    <div className="content-grid">
      <div className="card large">
        <h3>Dashboard Home</h3>
        <div className="muted">Welcome to AgriFarm — Phase 1 demo dashboard. Modules marked "Under Development" are planned for next steps.</div>
        <div style={{marginTop:12,display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12}}>
          <WeatherCard />
          <SoilCard />
          <CropRecCard />
          <FertilizerCard />
        </div>
      </div>

      <div className="card tall">
        <h3>Irrigation Recommendation</h3>
        <IrrigationCard />
      </div>

      <div className="card tall">
        <h3>Plant Disease Detection</h3>
        <DiseaseCard />
      </div>

      <div className="card">
        <h3>Recent Activity</h3>
        <RecentActivity />
      </div>

      <div className="card">
        <h3>Alerts</h3>
        <Alerts />
      </div>
    </div>
  )
}
