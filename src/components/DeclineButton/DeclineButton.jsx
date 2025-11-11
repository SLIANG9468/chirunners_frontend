import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

const DeclineButton = ( {team} ) => {
    const {token} = useAuth();
    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const handleClick = async (e) => {
       try {
        const response = await fetch(`${API_URL}/runners/decline-invite/${team.id}`, {
            method: 'DELETE',
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
    <CloseIcon onClick={handleClick}/>
  )
}

export default DeclineButton