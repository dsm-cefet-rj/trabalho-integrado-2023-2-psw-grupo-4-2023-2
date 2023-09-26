import React, { useState } from 'react';
import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';

const AuthModal = ({ open, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchForm = () => {
    setIsLogin(!isLogin); 
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Box
          sx={{
            width: '100%',
            padding: '40px',
            backgroundColor: '#091A62',
            position: 'relative'
          }}
        >
          <Button onClick={handleSwitchForm} sx={{ color: 'white' }}>
            {isLogin ? 'CADASTRO' : 'LOGIN'}
          </Button>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${imagemPrincipalHome})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '100vh'
          }}
        >
          {/* Aqui você pode adicionar os formulários de login e cadastro */}
          <form>
            <TextField label="Email" fullWidth />
            <TextField label="Senha" type="password" fullWidth />
            {isLogin ? (
              <Button variant="contained" color="primary" fullWidth>
                Entrar
              </Button>
            ) : (
              <Button variant="contained" color="primary" fullWidth>
                Cadastrar
              </Button>
            )}
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;