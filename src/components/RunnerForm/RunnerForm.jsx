import React from 'react'
import { useState } from 'react'
import './RunnerForm.css'

const RunnerForm = ({ submitFunction, initialData = null, isUpdate = false, hideButton = false }) => {
    const defaultFormData = {
        first_name: '',
        last_name:'',
        email:'',
        password:'',
        address_street:'',
        address_zipcode:'',
        address_city:'',
        address_state:'',
        birth_date: '',
        phone:'',
        gender:'',
        wechat_id:'',
    };

    // Merge initialData with defaults, ensuring no null values
    const initialFormData = initialData 
        ? Object.keys(defaultFormData).reduce((acc, key) => {
            acc[key] = initialData[key] ?? defaultFormData[key];
            return acc;
          }, {})
        : defaultFormData;

    const [formData, setFormData] = useState(initialFormData)

    const [waiverAccepted, setWaiverAccepted] = useState(isUpdate ? true : false)

    const handleChange = (event) =>{
        const { name, value } = event.target
        setFormData(prevData => ({...prevData, [name]:value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!isUpdate && !waiverAccepted) {
        alert('Please accept the waiver to continue registration.')
        return
      }
      submitFunction(formData);
    }

  return (
    <div className="runner-form-container">
      <h2>{isUpdate ? 'Profile' : 'Chi Running Club Membership'}</h2>
      <form id="runner-form" onSubmit={(e)=>handleSubmit(e)} className="runner-form">
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first_name">First Name *</label>
            <input 
              type="text" 
              id="first_name"
              name='first_name' 
              placeholder='Enter first name' 
              onChange={(e)=>handleChange(e)} 
              value={formData.first_name}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name *</label>
            <input 
              type="text" 
              id="last_name"
              name='last_name' 
              placeholder='Enter last name' 
              onChange={(e)=>handleChange(e)} 
              value={formData.last_name}
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input 
            type="email" 
            id="email"
            name='email' 
            placeholder='Enter email address' 
            onChange={(e)=>handleChange(e)} 
            value={formData.email}
            required 
            disabled={isUpdate}
          />
        </div>

        {!isUpdate && (
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input 
              type="password" 
              id="password"
              name='password' 
              placeholder='Enter password' 
              onChange={(e)=>handleChange(e)} 
              value={formData.password}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="address_street">Street Address</label>
          <input 
            type="text" 
            id="address_street"
            name='address_street' 
            placeholder='Enter street address (optional)' 
            onChange={(e)=>handleChange(e)} 
            value={formData.address_street}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="address_city">City</label>
            <input 
              type="text" 
              id="address_city"
              name='address_city' 
              placeholder='Enter city (optional)' 
              onChange={(e)=>handleChange(e)} 
              value={formData.address_city}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address_state">State</label>
            <input 
              type="text" 
              id="address_state"
              name='address_state' 
              placeholder='Enter state (optional)' 
              onChange={(e)=>handleChange(e)} 
              value={formData.address_state}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address_zipcode">Zip Code</label>
            <input 
              type="text" 
              id="address_zipcode"
              name='address_zipcode' 
              placeholder='Enter zip code (optional)' 
              onChange={(e)=>handleChange(e)} 
              value={formData.address_zipcode}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="birth_date">Birth Date *</label>
            <input 
              type="date" 
              id="birth_date"
              name='birth_date' 
              onChange={(e)=>handleChange(e)} 
              value={formData.birth_date}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone"
              name='phone' 
              placeholder='Enter phone number (optional)' 
              onChange={(e)=>handleChange(e)} 
              value={formData.phone}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select 
              id="gender"
              name='gender' 
              onChange={(e)=>handleChange(e)} 
              value={formData.gender}
            >
              <option value="">Select gender (optional)</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="wechat_id">WeChat ID</label>
            <input 
              type="text" 
              id="wechat_id"
              name='wechat_id' 
              placeholder='Enter WeChat ID (optional)' 
              onChange={(e)=>handleChange(e)} 
              value={formData.wechat_id}
            />
          </div>
        </div>

        {!isUpdate && (
          <div className="waiver-section">
            <h3>Waiver Statement</h3>
            <p className="waiver-text">
              I understand that running and fitness activities involve risks, including injury. I agree that I am responsible for my own health and safety during all Chi Running Club activities. I release Chi Running Club and its organizers, volunteers, and members from any liability related to my participation. I agree to follow all safety guidance and use common sense while running. By registering, I confirm that I have read and agree to this waiver.
            </p>
            <div className="waiver-checkbox">
              <input 
                type="checkbox" 
                id="waiver_acceptance"
                checked={waiverAccepted}
                onChange={(e) => setWaiverAccepted(e.target.checked)}
                required
              />
              <label htmlFor="waiver_acceptance">
                I have read and agree to the waiver statement *
              </label>
            </div>
          </div>
        )}

        {!hideButton && (
          <button type='submit' className="submit-button">
            {isUpdate ? 'Update' : 'Register'}
          </button>
        )}
      </form>
    </div>
  )
}

export default RunnerForm