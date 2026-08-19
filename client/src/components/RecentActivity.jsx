import React from 'react'

export default function RecentActivity(){
  const activities = [
    {time:'2 hours ago', text:'Soil sample recorded for North-West Plot'},
    {time:'Yesterday', text:'Irrigation cycle completed for South-East Plot'},
    {time:'2 days ago', text:'Sensor ID S-441 reported low battery'},
    {time:'3 days ago', text:'Fertilizer DAP applied to North-West Plot'}
  ]

  return (
    <div className="activity-list">
      {activities.map((a, i) => (
        <div key={i} className="activity-item">
          <div>
            <div style={{fontWeight:700}}>{a.text}</div>
            <div className="muted" style={{fontSize:12}}>{a.time}</div>
          </div>
          <div style={{fontSize:12,color:'var(--muted)'}}>View</div>
        </div>
      ))}
    </div>
  )
}
