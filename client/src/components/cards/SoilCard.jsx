import React from 'react'

export default function SoilCard(){
  const soil = {
    moisture: 28, // percent
    ph: 6.5,
    nitrogen: 'Moderate',
    phosphorus: 'Low',
    potassium: 'Sufficient'
  }

  return (
    <div className="card">
      <h4>Soil Information</h4>
      <div className="muted">Field: North-West Plot (F-102-NW)</div>
      <div style={{display:'flex',gap:12,marginTop:10}}>
        <div style={{flex:1}}>
          <div className="muted">Moisture</div>
          <div style={{fontWeight:700}}>{soil.moisture}%</div>
        </div>
        <div style={{flex:1}}>
          <div className="muted">pH</div>
          <div style={{fontWeight:700}}>{soil.ph}</div>
        </div>
        <div style={{flex:1}}>
          <div className="muted">N</div>
          <div style={{fontWeight:700}}>{soil.nitrogen}</div>
        </div>
      </div>
      <div style={{marginTop:10}} className="muted">Recommendations: Increase phosphorus with rock phosphate if phosphorus remains low. Soil test recommended every season.</div>
    </div>
  )
}
