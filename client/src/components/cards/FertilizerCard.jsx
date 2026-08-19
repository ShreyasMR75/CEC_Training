import React from 'react'

export default function FertilizerCard(){
  const rec = [
    {field:'North-West', fertilizer:'DAP', qty:'25 kg/acre'},
    {field:'South-East', fertilizer:'Urea', qty:'30 kg/acre'}
  ]

  return (
    <div className="card">
      <h4>Fertilizer Recommendation</h4>
      <div className="muted">Summary (sample suggestions)</div>
      <div style={{marginTop:10}}>
        {rec.map(r => (
          <div key={r.field} style={{display:'flex',justifyContent:'space-between',padding:'6px 0'}}>
            <div><strong>{r.field}</strong><div className="muted" style={{fontSize:12}}>{r.fertilizer}</div></div>
            <div style={{fontWeight:700}}>{r.qty}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop:10,fontSize:13,color:'#0f172a8a'}}>Note: Fertilizer recommendations are indicative. Please consult agronomist before large scale application.</div>
    </div>
  )
}
