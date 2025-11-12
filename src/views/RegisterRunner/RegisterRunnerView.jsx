import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import RunnerForm from '../../components/RunnerForm/RunnerForm'
import './RegisterRunnerView.css'

const RegisterRunnerView = () => {
  const { registerRunner } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (formData) => {
    setError(''); // Clear previous errors
    setSuccessMessage(''); // Clear previous success messages
    const result = await registerRunner(formData);
    if (result.success) {
      if (result.message) {
        setSuccessMessage(result.message);
        // Wait 2 seconds to show the message before navigating
        setTimeout(() => {
          navigate('/profile');
        }, 2000);
      } else {
        navigate('/profile');
      }
    } else {
      setError(result.error);
    }
  }
  
  return (
    <div className="register-runner-view">
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      <RunnerForm submitFunction={handleRegister} />
    </div>
  )
}

export default RegisterRunnerView