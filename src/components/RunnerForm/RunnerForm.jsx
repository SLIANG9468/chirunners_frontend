import React from 'react'
import { useState } from 'react'

const RunnerForm = ({ submitFunction }) => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name:'',
        email:'',
        password:'',
        address_street:'',
        address_zipcode:'',
        address_city:'',
        address_state:'',
        birth_date: null,
        phone:'',
        gender:'',
        wechat_id:'',
        waivers_sign_timestamp:null,
        expiration_date:null
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

        <input type="first_name" name='first_name' placeholder='first_name' onChange={(e)=>handleChange(e)} value={formData.first_name} />
        <input type="last_name" name='last_name' placeholder='last_name' onChange={(e)=>handleChange(e)} value={formData.last_name} />
        <input type="email" name='email' placeholder='email' onChange={(e)=>handleChange(e)} value={formData.email} />
        <input type="password" name='password' placeholder='password' onChange={(e)=>handleChange(e)} value={formData.password} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default RunnerForm