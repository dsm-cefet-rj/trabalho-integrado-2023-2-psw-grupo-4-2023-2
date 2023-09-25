import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const DescricaoLivro = ({ sinopse, desc, namePdf }) => {
  return (
    <>
      <Stack spacing={2} alignItems={"center"} textAlign={'center'} sx={{
        paddingY: 4
      }}>
        <Box sx={{
          maxWidth: 512
        }}>
          <Typography variant="h6">SINOPSE</Typography>
          <Typography variant="subtitle2">
            {sinopse}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">AUTOR E EDITORA</Typography>
          <Typography variant="subtitle2">
            {desc}
          </Typography>
        </Box>
        <Box>
          <Button  href={`/leitura/${namePdf || ""}`} size="large" variant='contained' color='secondary'>Começar a ler </Button>
        </Box>

      </Stack>
    </>
  );
};

export default DescricaoLivro;
