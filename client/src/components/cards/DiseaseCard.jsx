import React, { useState } from 'react'

export default function DiseaseCard(){
  const [status] = useState({
    status: 'Under Development',
    notes: 'Plant disease detection model integration is planned. You can upload sample images once ML service is available.'
  })

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontWeight:700,fontSize:16}}>Status: <span style={{fontWeight:800,color:'#c2410c',marginLeft:8}}>{status.status}</span></div>
      </div>
      <div style={{marginTop:12,color:'#0f172a8a'}}>{status.notes}</div>

      <div style={{marginTop:12}}>
        <button disabled style={{padding:'8px 12px',borderRadius:8,border:'none',background:'#e6e6e6',color:'#666'}}>Upload Image (Disabled)</button>
      </div>
    </div>
  )
}
