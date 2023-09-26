// LoginForm.js
import React from 'react';
import { TextField, Button } from '@mui/material';

const LoginForm = () => {
  return (
    <form>
      <TextField label="Nome" fullWidth />
      <TextField label="Email" fullWidth />
      <TextField label="Senha" type="password" fullWidth />
      <Button variant="contained" color="primary" fullWidth>
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
