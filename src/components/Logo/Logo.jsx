import { Box, Typography } from "@mui/material";
import logo from '../../assets/logo.png'
import styled from "@emotion/styled";

const LogoStyled = styled(Box)`
`


const Logo = ({color}) => {
    return (
        <LogoStyled sx={{height:{xs:50, md:60}, flexDirection:'row', alignItems:'center', display:'flex', gap:1}} flexWrap={"nowrap"} >
            <Box component={'img'} src={logo} height={'100%'}/>
            <Typography component={'div'} color={color}>
                LeiaMais
            </Typography>                        
        </LogoStyled>
    );
}
 
export default Logo;