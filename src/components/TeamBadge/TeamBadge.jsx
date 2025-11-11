import React from 'react'
import { useNavigate } from 'react-router-dom'
import AcceptButton from './AcceptButton';
import DeclineButton from './DeclineButton';
import './TeamBadge.css' 

const TeamBadge = ({ team, invite = false }) => {
  const navigate = useNavigate()

  const handleTeamClick = (team) => {
    navigate('/team-details', { state: { team } });
  };

  return (
    <>
    <div className="team-badge" onClick={() => handleTeamClick(team)}>
        <div>
        <h2>{team.team_name}</h2>
        <p>Host: {team.team_contact.first_name}</p>
        </div>
        {invite&&
      <div className='action-box'>
      <AcceptButton team={team}/>
      <DeclineButton team={team}/>
      </div>
    }
        
    </div>
    
    </>
  )
}

export default TeamBadge