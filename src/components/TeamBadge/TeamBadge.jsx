import React from 'react'
import { useNavigate } from 'react-router-dom'
import AcceptButton from './AcceptButton';
import DeclineButton from './DeclineButton';
import './styles.css' 

const TeamBadge = ({ team, invite = false }) => {
  const navigate = useNavigate()

  return (
    <>
    <div className="event-badge" >
        <div>
            <h2>{team.team_name}</h2>
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