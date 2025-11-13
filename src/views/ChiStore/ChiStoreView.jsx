import React from 'react'
import './ChiStoreView.css'
import carbLoadingImg from '../../assets/2025CarbLoading.JPG'

const ChiStoreView = () => {
  return (
    <div className="chistore-view">
      <div className="chistore-header">
        <h1>2026 Chicago Marathon Carbohydrate Loading Luncheon</h1>
        <p className="chistore-subtitle">Fuel Up. Power Up. Run Strong</p>
        <img src={carbLoadingImg} alt="2025 Carb Loading Event" className="carb-loading-image" />
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