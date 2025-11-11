import React from 'react'
import { useState } from 'react'

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
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>

        <input type="team_name" name='team_name' placeholder='team_name' onChange={(e)=>handleChange(e)} value={formData.team_name} />
        <input type="country" name='country' placeholder='country' onChange={(e)=>handleChange(e)} value={formData.country} />
        <input type="city" name='city' placeholder='city' onChange={(e)=>handleChange(e)} value={formData.city} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TeamForm