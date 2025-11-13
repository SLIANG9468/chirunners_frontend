import React, { useState, useEffect } from 'react'
import './RacesView.css'

const RacesView = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const getWeather = async () => {
      try {
        const city = 'Chicago';
        
        // Get coordinates for Chicago
        const geoResponse = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
        );
        const geoData = await geoResponse.json();

        if (geoData.length === 0) {
          setError('City not found');
          setLoading(false);
          return;
        }

        // Get weather data
        const weatherUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${apiKey}`;
        const weatherResponse = await fetch(weatherUrl);
        const weather = await weatherResponse.json();

        // Format weather data
        const formattedWeather = {
          city: geoData[0].name,
          country: geoData[0].country,
          highTemp: Math.round(((weather.daily[0].temp.max - 273.15) * 1.8) + 32),
          lowTemp: Math.round(((weather.daily[0].temp.min - 273.15) * 1.8) + 32),
          humidity: weather.daily[0].humidity,
          forecast: weather.daily[0].summary
        };

        setWeatherData(formattedWeather);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError('Failed to load weather data');
        setLoading(false);
      }
    };

    getWeather();
  }, [apiKey]);

  const races = [
    {
      id: 1,
      name: 'Schaumburg Turkey Trot Half Marathon & 5K',
      date: 'Saturday, November 29 2025',
      location: 'Ned Brown Meadow (Busse Woods), Elk Grove Village / Rolling Meadows, IL 60007',
      url: 'https://allcommunityevents.com/schaumburgturkeytrot'
    },
    {
      id: 2,
      name: 'Chi Town Half Marathon & 10K',
      date: 'Saturday, April 4 2026',
      location: '601 West Montrose Ave, Chicago, IL 60613',
      url: 'https://allcommunityevents.com/chitownhalfmarathon10k'
    },
    {
      id: 3,
      name: 'Chicagoland Spring Marathon, Half Marathon & 10K',
      date: 'Sunday, May 3 2026',
      location: '425 N Martingale Rd, Schaumburg, IL 60193',
      url: 'https://allcommunityevents.com/chicagolandspringmarathon'
    },
    {
      id: 4,
      name: 'North Shore Classic Half Marathon & 5K',
      date: 'Sunday, May 31 2026',
      location: 'Highland Park, IL, start/finish between St. Johns & Central Ave',
      url: 'https://northshoreclassic.com/'
    },
    {
      id: 5,
      name: 'Bank of America Chicago Marathon',
      date: 'Sunday, October 11 2026',
      location: 'Starts & finishes in Grant Park, Chicago, IL',
      url: 'https://www.chicagomarathon.com/'
    }
  ];

  return (
    <div className="races-view">
      <div className="races-container">
        <div className="races-header">
          <h1>Upcoming Races</h1>
          <p className="races-subtitle">Join us at these exciting running events in the Chicago area</p>
        </div>

        {/* Weather Section */}
        {loading ? (
          <div className="weather-loading">Loading Chicago weather...</div>
        ) : error ? (
          <div className="weather-error">{error}</div>
        ) : weatherData ? (
          <div className="weather-card">
            <h2 className="weather-title">Tomorrow's Weather in {weatherData.city}, {weatherData.country}</h2>
            <div className="weather-details">
              <div className="weather-item">
                <div className="weather-label">High</div>
                <div className="weather-value">{weatherData.highTemp}°F</div>
              </div>
              <div className="weather-item">
                <div className="weather-label">Low</div>
                <div className="weather-value">{weatherData.lowTemp}°F</div>
              </div>
              <div className="weather-item">
                <div className="weather-label">Humidity</div>
                <div className="weather-value">{weatherData.humidity}%</div>
              </div>
              <div className="weather-item forecast-item">
                <div className="weather-label">Forecast</div>
                <div className="weather-value forecast-text">{weatherData.forecast}</div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="races-list">
          {races.map((race) => (
            <a 
              key={race.id} 
              href={race.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="race-card-link"
            >
              <div className="race-card">
                <h2 className="race-name">{race.name}</h2>
                <div className="race-details">
                  <div className="race-detail">
                    <span className="detail-icon">📅</span>
                    <span className="detail-text">{race.date}</span>
                  </div>
                  <div className="race-detail">
                    <span className="detail-icon">📍</span>
                    <span className="detail-text">{race.location}</span>
                  </div>
                </div>
                <div className="race-register">
                  Click to view race details & register →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RacesView