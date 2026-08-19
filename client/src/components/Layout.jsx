import React from 'react'
import Sidebar from './Sidebar'

export default function Layout({ children }){
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">AF</div>
          <div>
            <div style={{fontWeight:800,fontSize:16}}>AgriFarm</div>
            <div style={{fontSize:12,opacity:0.9}}>Smart Farming</div>
          </div>
        </div>
        <nav className="nav">
          <a className="active">Home</a>
          <a>Fields</a>
          <a>Sensors</a>
          <a>ML Models</a>
          <a>Reports</a>
          <a>Settings</a>
        </nav>
      </aside>
      <main className="main">
        <div className="topbar">
          <div className="search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-4.35-4.35" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <input placeholder="Search farms, fields, sensors..." style={{border:0,outline:0}} />
          </div>
          <div className="user">
            <div style={{textAlign:'right'}}>
              <div style={{fontWeight:700}}>Ramesh Patel</div>
              <div style={{fontSize:12,color:'var(--muted)'}}>Farmer - Farm ID: F-102</div>
            </div>
            <div className="avatar">RP</div>
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}
