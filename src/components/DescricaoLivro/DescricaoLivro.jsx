import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

const DescricaoLivro = ({sinopse}) => {
  return (
    <>
      <Stack>
        <Box>
          <Typography variant="h6">SINOPSE</Typography>
          <Typography variant="subtitle2">
            {sinopse}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default DescricaoLivro;
