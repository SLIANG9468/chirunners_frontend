import React from 'react'
import './ChiStoreView.css'

const ChiStoreView = () => {
  return (
    <div className="chistore-view">
      <div className="chistore-header">
        <h1>Chi Running Club Store</h1>
        <p className="chistore-subtitle">2026 Chicago Marathon Carb Loading Lunch</p>
      </div>
      <div className="chistore-iframe-container">
        <iframe 
          src="https://www.zeffy.com/en-US/ticketing/2026-chicago-marathon-carb-loading-lunch"
          className="chistore-iframe"
          title="Chicago Marathon Carb Loading Lunch Tickets"
        />
      </div>
    </div>
  )
}

export default ChiStoreView