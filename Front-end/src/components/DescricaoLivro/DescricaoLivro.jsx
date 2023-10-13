import { Button, Typography, Paper } from "@mui/material";
import { Box, Stack } from "@mui/system";

const DescricaoLivro = ({data}) => {
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
            <Typography variant="h6">SINOPSE</Typography>
            <Typography variant="body1" sx={{
              textAlign: 'justify',
              lineHeight: '1.6',
              fontSize: '16px',
              color: '#333',
              margin:'10px',
            }}>
              {data.sinopse}
            </Typography>
          </Box>
          {/* <Box>
            <Typography variant="h6">AUTOR</Typography>
            <Typography variant="subtitle2" sx={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#007BFF', 
              marginBottom:'10px'
            }}>
              {desc}
            </Typography>
          </Box> */}
          <Box>
            <Typography variant="h6">GÊNERO</Typography>
            <Typography variant="subtitle2" sx={{
              fontSize: '14px',
              color: '#666',
              margin: '5px 0 15px 0' 
            }}>
              {data.genero}
            </Typography>
          </Box>
          <Box>
            <Button  href={`/leitura/${data.id || ""}`} size="large" variant='contained' color='secondary' sx={{fontWeight: 'bold'}}>LEIA</Button>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};

export default DescricaoLivro;
