import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  Link,
  Menu,
  MenuItem,
  Toolbar as MuiToolbar,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "../Search/Search.styled";
import {
  ArrowDropDown,
  KeyboardArrowDown,
  KeyboardArrowUp,
  SearchOutlined,
} from "@mui/icons-material";
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import { AutenticacaoContext } from "../../contexts/Autenticacao";
import { useContext, useState } from "react";

const Toobar = styled(MuiToolbar)`
  &.MuiToolbar-root {
    padding: 0;
  }
`;

const Navbar = ({ drawerWidth = 240, toggleDrawer }) => {
  const { user, signout } = useContext(AutenticacaoContext);

  const [userMenu, setUserMenu] = useState(null);
  const open = Boolean(userMenu);
  const handleMenu = (event) => {
    setUserMenu(event.currentTarget);
  };
  const handleClose = () => {
    setUserMenu(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Container maxWidth="xl">
        <Toobar variant="regular" sx={{ paddingX: "100px" }}>
          <IconButton
            sx={{
              mr: 2,
              display: {
                md: "none",
              },
            }}
            color="inherit"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Search
            id="search"
            size="small"
            label=""
            variant="outlined"
            placeholder="Pesquisar"
            sx={{ display: { xs: "none", md: "block" } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined sx={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ flexGrow: 1 }}></Box>

          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Typography variant="body1">{user.nome}</Typography>

            <Link href="/perfil">
              <Avatar
                sx={{ cursor: "pointer" }}
                id="avatar-user"
                aria-controls={open ? "user-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              />
            </Link>
          </Stack>
          <IconButton
            size="small"
            color="inherit"
            id="user-button"
            aria-controls={open ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleMenu}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>

          <Menu
            id="user-menu"
            anchorEl={userMenu}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "user-button avatar-user",
            }}
          >
            <Link underline="none" color={"inherit"} href="/perfil">
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
            </Link>

            <MenuItem onClick={handleClose}>Relatorío do Usuário</MenuItem>
            <MenuItem onClick={signout}>Sair</MenuItem>
          </Menu>
        </Toobar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
