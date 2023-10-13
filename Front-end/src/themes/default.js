import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#031881',
        },
        secondary: {
            main: '#E6B33D',
            contrastText: '#031881',
        },
        background:{
            default: '#ECF0F2'
        }
    },
    typography:{
        grey: {
            color: '#B2B6B9' 
        }
    }
});


export default theme
