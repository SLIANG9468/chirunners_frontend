import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import TeamForm from '../../components/TeamForm/TeamForm'
import './AddTeamView.css'

const AddTeamView = () => {
  const { addTeam } = useAuth();
  const navigate = useNavigate();

  const handleAddTeam = async (teamData) => {
    await addTeam(teamData);
    navigate('/myteams');
  };

  return (
    <div className="add-team-view">
      <TeamForm submitFunction={handleAddTeam} />
    </div>
  )
}
export default AddTeamView