import React from 'react';
import { TextField, Button } from '@mui/material';

const SignupForm = () => {
  return (
    <form>
      <TextField label="Nome" fullWidth />
      <TextField label="Email" fullWidth />
      <TextField label="Senha" type="password" fullWidth />
      <Button variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
};

export default SignupForm;
