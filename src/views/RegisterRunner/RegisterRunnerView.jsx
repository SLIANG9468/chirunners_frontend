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
      }
      navigate('/profile');
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