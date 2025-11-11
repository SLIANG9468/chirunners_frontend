import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'


const TeamMembers = () => {
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
    <div>
        <h1>
            My Teams
        </h1>
        {teams.length === 0?(
            <p className = 'no-teams'> No Team found</p>
        ):(
            <div className='box'>
                {teams?.map((team) => (
                    <div key = {team.id}>
                        <h3>
                            Team Name: {team.team_name}; Country: {team.country}; City: {team.city}; Contact: {team.team_contact.first_name}
                        </h3> 
                    </div>
                )
                )}
            </div>
        )
        }
    </div>
  )
};

export default TeamMembers;