import React from 'react'
import { useState } from 'react'
import './TeamForm.css'

const TeamForm = ({submitFunction}) => {
    const [formData, setFormData] = useState({
        team_name: '',
        country:'',
        city:''
    })

    const handleChange = (event) =>{
        const { name, value } = event.target //grabbing the name and value properties from the input element
        setFormData(prevData => ({...prevData, [name]:value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      submitFunction(formData);
    }

  return (
    <div className="team-form-container">
      <h2>Create New Team</h2>
      <form className="team-form" onSubmit={(e)=>handleSubmit(e)}>
        
        <div className="form-group">
          <label htmlFor="team_name">Team Name *</label>
          <input 
            type="text" 
            id="team_name"
            name='team_name' 
            placeholder='Enter team name' 
            onChange={(e)=>handleChange(e)} 
            value={formData.team_name}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country *</label>
          <input 
            type="text" 
            id="country"
            name='country' 
            placeholder='Enter country' 
            onChange={(e)=>handleChange(e)} 
            value={formData.country}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City *</label>
          <input 
            type="text" 
            id="city"
            name='city' 
            placeholder='Enter city' 
            onChange={(e)=>handleChange(e)} 
            value={formData.city}
            required 
          />
        </div>

        <button type='submit' className="submit-button">Create Team</button>
      </form>
    </div>
  )
}

export default TeamForm