import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import TeamForm from '../../components/TeamForm/TeamForm'

const AddTeamView = () => {
  const { addTeam } = useAuth();
  return (
    <div>
      < TeamForm submitFunction={ addTeam} />
    </div>
  )
}
export default AddTeamView