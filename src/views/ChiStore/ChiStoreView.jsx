import React from 'react'

const ChiStoreView = () => {
  return (
    <div style={{ width: '100%', height: 'calc(100vh - 100px)' }}>
      <h1 style={{ padding: '20px' }}>Chi Running Club Store - 2026 Chicago Marathon Carb Loading Lunch</h1>
      <iframe 
        src="https://www.zeffy.com/en-US/ticketing/2026-chicago-marathon-carb-loading-lunch"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="Chicago Marathon Carb Loading Lunch Tickets"
      />
    </div>
  )
}

export default ChiStoreView