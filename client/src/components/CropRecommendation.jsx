import React, { useState } from 'react'

export default function CropRecommendation(){
  const [form, setForm] = useState({N:'',P:'',K:'',temperature:'',humidity:'',ph:'',rainfall:''})
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const onChange = (e) => setForm({...form,[e.target.name]: e.target.value})

  const submit = async () =>{
    setError(null)
    setResult(null)
    // basic validation
    const required = ['N','P','K','temperature','humidity','ph','rainfall']
    for(const k of required){
      if(form[k] === '' || form[k] === null){
        setError(`Please provide ${k}`)
        return
      }
    }

    const payload = {}
    required.forEach(k => payload[k] = parseFloat(form[k]))

    setLoading(true)
    try{
      const res = await fetch('http://localhost:5000/api/recommend-crop', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(!res.ok){
        setError(data.message || data.error || 'Failed to get recommendation')
      }else{
        setResult(data)
      }
    }catch(err){
      setError(err.message)
    }finally{setLoading(false)}
  }

  return (
    <div className="card large">
      <h3>Crop Recommendation</h3>
      <div className="muted">Enter soil and weather observations to get a crop recommendation. ML model required — if not trained you will be prompted to train the model.</div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:12}}>
        <input name="N" placeholder="Nitrogen (N)" value={form.N} onChange={onChange} />
        <input name="P" placeholder="Phosphorus (P)" value={form.P} onChange={onChange} />
        <input name="K" placeholder="Potassium (K)" value={form.K} onChange={onChange} />
        <input name="temperature" placeholder="Temperature (°C)" value={form.temperature} onChange={onChange} />
        <input name="humidity" placeholder="Humidity (%)" value={form.humidity} onChange={onChange} />
        <input name="ph" placeholder="Soil pH" value={form.ph} onChange={onChange} />
        <input name="rainfall" placeholder="Rainfall (mm)" value={form.rainfall} onChange={onChange} />
      </div>

      <div style={{marginTop:12,display:'flex',gap:12}}>
        <button onClick={submit} disabled={loading} style={{padding:'8px 12px',borderRadius:8}}>{loading ? 'Recommending...' : 'Recommend Crop'}</button>
        <button onClick={()=>{setForm({N:'',P:'',K:'',temperature:'',humidity:'',ph:'',rainfall:''}); setResult(null); setError(null)}} style={{padding:'8px 12px',borderRadius:8}}>Reset</button>
      </div>

      {error && <div style={{marginTop:12,color:'#b91c1c'}}>{error}</div>}

      {result && (
        <div style={{marginTop:12}}>
          <h4>Result</h4>
          <div style={{display:'flex',gap:12}}>
            <div style={{flex:1}}>
              <div className="muted">Recommended Crop</div>
              <div style={{fontWeight:800,fontSize:18}}>{result.recommended_crop}</div>
              {result.confidence !== undefined && (
                <div className="muted">Confidence: {(result.confidence*100).toFixed(1)}%</div>
              )}
            </div>
            <div style={{flex:1}}>
              <div className="muted">Input Summary</div>
              <pre style={{background:'#f3f4f6',padding:10,borderRadius:8}}>{JSON.stringify(result.input,null,2)}</pre>
            </div>
          </div>

          <div style={{marginTop:10}}>
            <div className="muted">Explanation</div>
            <div style={{marginTop:6}}>{result.explanation || 'No explanation provided.'}</div>
          </div>
        </div>
      )}

    </div>
  )
}
