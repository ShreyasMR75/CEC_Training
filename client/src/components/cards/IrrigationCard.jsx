import React from 'react'

export default function IrrigationCard(){
  const rec = {
    nextIrrigation: 'in 2 days',
    method: 'Drip Irrigation',
    waterNeed: 'Moderate (approx. 4000L)'
  }

  return (
    <div>
      <div className="muted">Recommended Method</div>
      <div style={{fontWeight:800,fontSize:18,marginTop:6}}>{rec.method}</div>
      <div style={{marginTop:8,display:'flex',justifyContent:'space-between'}}>
        <div>
          <div className="muted">Next Irrigation</div>
          <div style={{fontWeight:700}}>{rec.nextIrrigation}</div>
        </div>
        <div>
          <div className="muted">Water Need</div>
          <div style={{fontWeight:700}}>{rec.waterNeed}</div>
        </div>
      </div>
      <div style={{marginTop:10,fontSize:13,color:'#0f172a8a'}}>Note: Irrigation schedule feature is under development. Current data is illustrative to show UI.</div>
    </div>
  )
}
