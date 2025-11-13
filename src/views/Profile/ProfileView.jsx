import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import RunnerForm from '../../components/RunnerForm/RunnerForm'
import './ProfileView.css'

const ProfileView = () => {
  const { runner, token, logout, updateRunner } = useAuth();
  const navigate = useNavigate();
  const [showDeleteButton, setShowDeleteButton] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!runner) {
    return (
      <div className="profile-container">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  const handleUpdate = async (formData) => {
    console.log('Form data being sent:', formData);
    console.log('First name:', formData.first_name);
    console.log('Last name:', formData.last_name);
    console.log('Phone:', formData.phone);
    
    // Clear previous messages
    setSuccessMessage('');
    setErrorMessage('');
    
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/runners`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      console.log('Response status:', response.status);

      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log('Response data:', data);
          
          // Update runner state in AuthContext
          if (data.runner) {
            updateRunner(data.runner);
          }
          
          setSuccessMessage('Profile updated successfully!');
        } else {
          setSuccessMessage('Profile updated successfully!');
        }
        // No reload needed - React will automatically re-render with updated state
      } else {
        const contentType = response.headers.get('content-type');
        let errorMsg = 'Unknown error';
        
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          errorMsg = data.error || data.message || 'Unknown error';
        } else {
          const text = await response.text();
          errorMsg = `Server error: ${response.status} ${response.statusText}`;
          console.error('Server returned non-JSON response:', text);
        }
        
        setErrorMessage(`Failed to update profile: ${errorMsg}`);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setErrorMessage(`An error occurred while updating your profile: ${error.message}`);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Clear previous messages
      setSuccessMessage('');
      setErrorMessage('');
      
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await fetch(`${API_URL}/runners`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          setSuccessMessage('Account deleted successfully');
          setTimeout(() => {
            logout();
            navigate('/');
          }, 1500);
        } else {
          setErrorMessage('Failed to delete account');
        }
      } catch (error) {
        console.error('Error deleting account:', error);
        setErrorMessage('An error occurred while deleting your account');
      }
    }
  };

  return (
    <div className="profile-view">
      <div className="profile-form-wrapper">
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <RunnerForm 
          submitFunction={handleUpdate} 
          initialData={runner}
          isUpdate={true}
          hideButton={true}
        />
        <div className="profile-actions">
          <button className="update-button" type="submit" form="runner-form">
            Update
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileView