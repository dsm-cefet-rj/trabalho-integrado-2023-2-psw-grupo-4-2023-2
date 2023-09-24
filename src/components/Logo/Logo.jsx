import { Box, Stack, Typography } from "@mui/material";
import logo from '../../assets/logo.png'


const Logo = () => {
    return (
        <Stack sx={{height:{xs:30, md:50}, alignItems:'center'}} direction={"row"} spacing={1} flexWrap={"nowrap"}>
            <Box component={'img'} src={logo} height={'100%'}/>
            <Typography component={'div'} >
                LeiaMais
            </Typography>                        
        </Stack>
    );
}
 
export default Logo;