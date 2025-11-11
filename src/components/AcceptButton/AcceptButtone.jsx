import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check';

const AcceptButton = ( {team} ) => {
    const {token} = useAuth();
    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const handleClick = async (e) =>{
       try {
        const response = await fetch(`${API_URL}/players/accept-invite/${team.id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok){
            console.error('There was an error accepting the invitation.')
            return;
        }
        
        navigate('/myteams')
       } catch (error) {
           console.error('Error:', error);
       }
    }


  return (

    <CheckIcon onClick={handleClick} />
  )
}

export default AcceptButton