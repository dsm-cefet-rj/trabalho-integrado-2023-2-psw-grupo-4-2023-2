import { Box, Typography } from '@mui/material'
import { KeyboardArrowLeft } from '@mui/icons-material';
import React from 'react'
import { Link } from "react-router-dom";

const Voltar = () => {
  return (
    <Box sx={{mt:4}}>
    <Link to="../../../" relative="path" style={{ textDecoration: 'none' }}>
      <Typography variant="h4" gutterBottom component={'div'} display={'flex'} alignItems={'center'} color={'white'}>
        <KeyboardArrowLeft fontSize='large' color={'secondary'} />
        Voltar
      </Typography>
    </Link>
    </Box>

  )
}

export default Voltar