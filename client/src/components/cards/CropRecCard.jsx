import React from 'react'

export default function CropRecCard(){
  const rec = {
    suitableCrops: ['Maize', 'Soybean', 'Chickpea'],
    season: 'Kharif',
    soilType: 'Loamy'
  }

  return (
    <div className="card">
      <h4>Crop Recommendation</h4>
      <div className="muted">Based on soil & weather (sample data)</div>
      <div style={{marginTop:10}}>
        <strong>Suitable Crops:</strong>
        <ul>
          {rec.suitableCrops.map(c => <li key={c}>{c}</li>)}
        </ul>
        <div className="muted">Season: {rec.season} · Soil: {rec.soilType}</div>
      </div>
      <div style={{marginTop:8,color:'#0f172a8a',fontSize:13}}>Note: Crop recommendation algorithm is under development — current suggestions are sample outputs for demo.</div>
    </div>
  )
}
