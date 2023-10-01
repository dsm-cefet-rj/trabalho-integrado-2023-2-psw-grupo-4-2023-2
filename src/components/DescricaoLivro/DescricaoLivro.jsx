import { Button, Typography, Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";

const DescricaoLivro = ({ sinopse, desc, namePdf, genero }) => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Stack spacing={2} alignItems={"center"} textAlign={'center'} sx={{
        paddingY: 4,
        maxWidth: 400
      }}>
        <Paper elevation={3} sx={{ 
          borderRadius: '10px', 
          padding: '16px', 
          background: '#fff', 
        }}>
          
          <Box>
            <Typography variant="h6">GÊNERO</Typography>
            <Typography variant="subtitle2" sx={{
              fontSize: '14px',
              color: '#666' 
            }}>
              {genero}
            </Typography>
          </Box>
          <Box>
            <Button  href={`/leitura/${namePdf || ""}`} size="large" variant='contained' color='secondary'>Começar a ler </Button>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};

export default DescricaoLivro;
