import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import RunnerForm from '../../components/RunnerForm/RunnerForm'

const RegisterRunnerView = () => {
  const { registerRunner} = useAuth();
  return (
    <div>
      < RunnerForm submitFunction={ registerRunner} />
    </div>
  )
}
export default RegisterRunnerView