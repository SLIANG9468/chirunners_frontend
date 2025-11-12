import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../../assets/chiTop.webp'
import './HomeView.css'

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <div 
      className='home-container'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: 'calc(100vh - 100px)',
        maxHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        padding: '20px'
      }}
    >
      <div className='home-content' style={{ 
        marginTop: '0',
        background: 'transparent',
        backdropFilter: 'none',
        padding: '20px',
        maxWidth: '1200px'
      }}>
        <p className='description' style={{
          fontSize: '2rem',
          color: 'black',
          fontWeight: 'bold',
        }}>
          Chinese American runners in the Chicago area coming together to run, learn, and have fun.
        </p>
        <p className='description' style={{
          fontSize: '2rem',
          color: 'black',
          fontWeight: 'bold',
        }}>
          Be part of the team as we train for the 2026 Chicago Marathon — join us chasing 26.2 miles! 🏃‍♀️🏃‍♂️✨
        </p>
      </div>
    </div>
  )
}

export default HomeView