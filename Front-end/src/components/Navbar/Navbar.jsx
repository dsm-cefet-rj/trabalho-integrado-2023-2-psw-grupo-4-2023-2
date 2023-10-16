import { AppBar, Avatar, Box, IconButton, InputAdornment, Link, Menu, MenuItem, Toolbar as MuiToolbar, Stack, Tooltip, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from "../Search/Search.styled";
import { ArrowDropDown, KeyboardArrowDown, KeyboardArrowUp, SearchOutlined } from "@mui/icons-material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import { AutenticacaoContext } from "../../contexts/Autenticacao";
import { useContext, useEffect, useState } from "react";
import { useLivros } from "../../hooks/useLivros";

const Toobar = styled(MuiToolbar)`    
    &.MuiToolbar-root{
        padding: 0;
    }
    `

const Navbar = ({ drawerWidth = 240, toggleDrawer }) => {
    const { usuario, sair } = useContext(AutenticacaoContext);
    const {pesquisados, pesquisar} = useLivros();

    const [userMenu, setUserMenu] = useState(null);
    const [pesquisa, setPesquisa] = useState("");

    const open = Boolean(userMenu);
    const handleMenu = (event) => {
        setUserMenu(event.currentTarget);
    };
    const handleClose = () => {
        setUserMenu(null);
    };
    const handlePesquisa = (event) => {
        setPesquisa(event.target.value);
    };

    useEffect(() => {
        pesquisar(pesquisa);
    }, [pesquisa])

    return (
        <AppBar position='fixed'
            sx={{
                width: { md: `calc(100vw - ${drawerWidth}px)` },
                ml: { md: `${drawerWidth}px` },
                boxShadow: 'none',
                borderBottom: '1px solid white'
            }}
        >
            <Container maxWidth='xl'>
                <Toobar variant="regular" sx={{ paddingX: '100px' }} >
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
                        sx={{ display: {width:'100vh', xs: 'none', md: 'block' } }}
                        value={pesquisa}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchOutlined sx={{ color: 'white' }} /></InputAdornment>,

                        }}
                        onChange={handlePesquisa}
                    />

                    <Box sx={{ flexGrow: 1 }}></Box>

                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Typography variant="body1">{usuario.nome}</Typography>

                        <Link href="/perfil">
                            <Avatar
                                sx={{ cursor: 'pointer' }}
                                id='avatar-user'
                                aria-controls={open ? 'user-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            />
                        </Link>

                    </Stack>
                    <IconButton
                        size='small'
                        color="inherit"
                        id="user-button"
                        aria-controls={open ? 'user-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleMenu}


                    >
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>

                    <Menu
                        id="user-menu"
                        anchorEl={userMenu}
                        disableScrollLock
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'user-button avatar-user',
                        }}
                    >

                        <Link underline="none" color={'inherit'} href="/perfil">
                            <MenuItem onClick={handleClose}>
                                Perfil
                            </MenuItem>
                        </Link>

                        <Link underline="none" color={'inherit'} href="/relatorio">
                            <MenuItem onClick={handleClose}>Relatório do Usuário</MenuItem>
                        </Link>

                        <Link underline="none" color={'inherit'}>
                            <MenuItem onClick={sair}>Sair</MenuItem>
                        </Link>

                    </Menu>

                </Toobar>
            </Container>
        </AppBar >


    );
}

export default Navbar;