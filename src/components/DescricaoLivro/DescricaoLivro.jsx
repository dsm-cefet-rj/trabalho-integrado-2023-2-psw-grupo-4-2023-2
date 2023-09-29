import React from 'react';
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const DescricaoLivro = ({ sinopse, desc, namePdf, genero, id }) => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Stack spacing={2} alignItems={"center"} textAlign={'center'} sx={{
        paddingY: 4,
        maxWidth: 400
      }}>
        <Box>
          <Typography variant="h6">SINOPSE</Typography>
          <Typography variant="subtitle2" sx={{textAlign: 'justify'}}>
            {sinopse}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">AUTOR</Typography>
          <Typography variant="subtitle2">
            {desc}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">GÊNERO</Typography>
          <Typography variant="subtitle2">
            {genero}
          </Typography>
        </Box>
        <Box>
          <Button  href={`/leitura/${id || ""}/${namePdf || ""}`} size="large" variant='contained' color='secondary'>Começar a ler </Button>
        </Box>

      </Stack>
    </Box>
  );
};

export default DescricaoLivro;
