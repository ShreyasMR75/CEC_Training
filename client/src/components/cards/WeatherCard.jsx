import React from 'react'

export default function WeatherCard(){
  // Mock realistic data
  const data = {
    location: 'Pune, Maharashtra',
    temperature: 29,
    condition: 'Partly Cloudy',
    humidity: 62,
    wind: '10 km/h NE'
  }

  return (
    <div className="card">
      <h4>Weather</h4>
      <div className="muted">{data.location}</div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:8}}>
        <div>
          <div style={{fontSize:28,fontWeight:800}}>{data.temperature}°C</div>
          <div className="muted">{data.condition}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div className="muted">Humidity</div>
          <div style={{fontWeight:700}}>{data.humidity}%</div>
          <div style={{marginTop:8}} className="muted">Wind: {data.wind}</div>
        </div>
      </div>
      <div style={{marginTop:12,fontSize:13,color:'#0f172a8a'}}>Note: Weather shown is sample data. Integrate a weather API (e.g., OpenWeatherMap) for live data.</div>
    </div>
  )
}
