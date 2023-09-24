import { AppBar, Avatar, Box, IconButton, InputAdornment, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from "../Search/Search.styled";
import { SearchOutlined } from "@mui/icons-material";

const Navbar = ({drawerWidth=240, toggleDrawer}) => {
    return (

        <AppBar position='fixed'
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { md: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    sx={{
                        mr: 2, display: {
                            md: 'none'
                        }
                    }}
                    color='inherit'
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>

                <Search id="search" size='small' label="" variant="outlined" placeholder='Pesquisar'
                    sx={{ display: { xs: 'none', md: 'block' } }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchOutlined sx={{ color: 'white' }} /></InputAdornment>,

                    }}
                />

                <Box sx={{ flexGrow: 1 }}></Box>

                <Avatar />

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;