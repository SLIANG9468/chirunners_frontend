import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LoginView.css'




const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError(''); // Clear previous errors

        const result = await login(email, password);
        if (result.success) {
            navigate('/');
        } else {
            setError(result.error);
        }
    }

  return (
    <div className="login-view">
        {error && (
            <div className="error-message">
                {error}
            </div>
        )}
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={(e)=>handleSubmit(e)} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        placeholder='Enter your email' 
                        name='email' 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        placeholder='Enter your password' 
                        name='password' 
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    </div>
  )
}

export default LoginView