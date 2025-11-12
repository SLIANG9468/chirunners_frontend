import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './TeamView.css'

const TeamView = () => {
  const { token, runner } = useAuth();
  const [teamData, setTeamData] = useState(null);
  const [runners, setRunners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        console.log('Runner object:', runner);

        // Fetch the team details and all its members
        const response = await fetch(`${API_URL}/teams/runners`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        });

        const data = await response.json();
        console.log('Team data:', data);

        if (response.ok) {
          setTeamData(data.team);
          // Extract runner objects from the nested structure
          const runnersData = data.runners?.map(item => ({
            ...item.runner,
            role: item.role
          })) || [];
          console.log('Processed runners data:', runnersData);
          setRunners(runnersData);
        } else {
          setError(data.error || 'Failed to load team data');
        }
      } catch (err) {
        console.error('Error fetching team data:', err);
        setError('Error loading team information');
      } finally {
        setLoading(false);
      }
    };

    if (token && runner) {
      fetchTeamData();
    }
  }, [token, runner, API_URL]);

  if (loading) {
    return (
      <div className="team-view">
        <div className="loading">Loading team information...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="team-view">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="team-view">
      <div className="team-container">
        {teamData && (
          <div className="team-header">
            <h1>{teamData.team_name}</h1>
            <div className="team-location">
              {teamData.city && teamData.country && (
                <p className="team-description">
                  📍 {teamData.city}, {teamData.country}
                </p>
              )}
            </div>
            {teamData.team_contact && (
              <div className="team-contact">
                <span className="contact-label">Team Contact:</span>
                <span className="contact-name">
                  {teamData.team_contact.first_name} {teamData.team_contact.last_name}
                </span>
              </div>
            )}
            <div className="team-stats">
              <div className="stat-item">
                <span className="stat-label">Total Members:</span>
                <span className="stat-value">{runners.length}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Team ID:</span>
                <span className="stat-value">{teamData.id}</span>
              </div>
            </div>
          </div>
        )}

        <div className="runners-section">
          <h2>Team Members</h2>
          {runners.length === 0 ? (
            <p className="no-runners">No members in this team yet.</p>
          ) : (
            <div className="runners-grid">
              {runners.map((runner) => (
                <div key={runner.id} className="runner-card">
                  <div className="runner-header">
                    <div className="runner-name">
                      {runner.first_name} {runner.last_name}
                    </div>
                    {runner.role && (
                      <div className="runner-role">{runner.role}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamView
