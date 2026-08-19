import React from 'react'

export default function Alerts(){
  const alerts = [
    {level:'High', text:'Pest outbreak suspected in North-West Plot', time:'1 hour ago'},
    {level:'Medium', text:'Moisture below threshold in South-East Plot', time:'6 hours ago'}
  ]

  return (
    <div style={{display:'flex',flexDirection:'column',gap:8}}>
      {alerts.map((a,i) => (
        <div key={i} className="alert">
          <div style={{fontWeight:800,color:'#7f1d1d'}}>{a.level} Alert</div>
          <div style={{marginTop:6}}>{a.text}</div>
          <div className="muted" style={{marginTop:6,fontSize:12}}>{a.time}</div>
        </div>
      ))}
      <div style={{marginTop:8,fontSize:13,color:'#0f172a8a'}}>Tip: Alerts are generated from sensor readings and ML models. ML integrations are under development.</div>
    </div>
  )
}
