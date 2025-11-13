import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../../assets/chiTop.JPG'
import './HomeView.css'

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <div className='home-container'>
      <div className='home-image-container'>
        <img src={heroImage} alt="Chi Running Club" className='home-hero-image' />
      </div>
      <div className='home-content'>
        <p className='description'>
          The CHI Running Club is a non-profit organization formed by Chinese American running enthusiasts in the greater Chicago area. We are dedicated to promoting a healthy lifestyle and fostering a sense of community through running. Each week, we organize group runs in various locations throughout Chicago and its suburbs, catering to runners of all levels—from beginners to seasoned athletes. Our runs provide a fantastic opportunity to meet fellow running enthusiasts, share tips, and enjoy the beautiful scenery that the area has to offer. In addition to our weekly runs, we also host special events, and social gatherings throughout the year. 
        </p>
        <p className='description'>
          You can also contact us <a href="mailto:info@chirunners.org" className='contact-link'>info@chirunners.org</a>
        </p>
        <p className='description'>
          We invite you to join us for a run and become part of our vibrant community! Please visit our Strava club page: <a href="https://www.strava.com/clubs/chirunners" target="_blank" rel="noopener noreferrer" className='strava-link'>https://www.strava.com/clubs/chirunners</a>
        </p>
      </div>
    </div>
  )
}

export default HomeView