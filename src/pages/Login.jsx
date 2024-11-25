import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: {
          username: username,
          password: password,
        },
      });

      const data = response.data;

      if (data.length > 0) {
        localStorage.setItem('user', JSON.stringify(data[0]));
        navigate('/admin'); 
      } else {
        setError('Usuário ou senha inválidos.');
      }
    } catch (err) {
      setError('Erro ao conectar ao servidor.');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Box component="form" onSubmit={handleLogin} sx={{width: '100%',  maxWidth: '400px', backgroundColor: '#fff', padding: '16px', borderRadius: '8px', boxShadow: 3,}}>
        <Typography variant="h4" mb={2} textAlign="center"> Login </Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <TextField label="Usuário" fullWidth variant="outlined" margin="normal" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <TextField label="Senha" fullWidth type="password" variant="outlined" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Entrar
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
