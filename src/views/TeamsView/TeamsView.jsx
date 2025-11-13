import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './TeamsView.css'


const TeamsView = () => {
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState();
    const API_URL = import.meta.env.VITE_API_URL;
    const {isAuthenticated, token} = useAuth();

    useEffect(() => {
        const fetchTeams = async() => {

            if (!isAuthenticated) {
                setError("No authentication token found");
                return;
            }

        try {
            const response = await fetch(API_URL + '/teams/my-teams', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ token
                }
            });
            
            const data = await response.json()
            console.log(data)
            setTeams(data ? data:[]);
        }catch(err){
            console.log(err);
        }
    }
    fetchTeams();
    },[]);

  return (
    <div className="teams-view">
      <div className="teams-container">
        <h1 className="teams-title">My Teams</h1>
        {teams.length === 0 ? (
          <p className="no-teams">No Team found</p>
        ) : (
          <div className="teams-grid">
            {teams?.map((team) => (
              <div key={team.id} className="team-card">
                <h2 className="team-name">{team.team_name}</h2>
                <div className="team-details">
                  <div className="team-info">
                    <span className="info-icon">📍</span>
                    <span className="info-text">
                      {team.city}, {team.country}
                    </span>
                  </div>
                  <div className="team-info">
                    <span className="info-icon">👤</span>
                    <span className="info-text">
                      {team.team_contact.first_name} {team.team_contact.last_name}
                    </span>
                  </div>
                  <div className="team-info">
                    <span className="info-icon">✉️</span>
                    <span className="info-text">{team.team_contact.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
};

export default TeamsView;