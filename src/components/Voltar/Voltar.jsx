import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { KeyboardArrowLeft } from '@mui/icons-material';
import React from 'react'

const Voltar = () => {
  return (
    <Box color={"white"} >
      <Typography variant="h4" gutterBottom component={'div'} display={'flex'} alignItems={'center'}>
      <KeyboardArrowLeft fontSize='large' color={'secondary'} />
        Voltar
      </Typography>
    </Box>
  )
}

export default Voltar