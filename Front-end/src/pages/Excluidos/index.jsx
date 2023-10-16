import { Box, Grid, Typography } from '@mui/material';
import Livro from '../../components/Livro/Livro';
import { useLivros } from '../../hooks/useLivros';

const Excluidos = ({}) => {

    const { excluidos } = useLivros();
    console.log(excluidos);

    return (
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}columns={60} marginY={4}>
            {excluidos ? excluidos.map((data, index) =>
                <Grid key={index} component={'div'} item xs={60} sm={30} md={20} lg={15} xl={12} color={'white'} sx={{
                    display: {xs:'flex', md:'block'},
                    alignItems:'center',
                    justifyContent:'center'
                }}>

                    <Livro key={index} data={data} />
                </Grid>
            ) : ""}

        </Grid>
    );
}

export default Excluidos;
