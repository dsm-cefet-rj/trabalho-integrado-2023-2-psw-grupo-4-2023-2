import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Logo from "../Logo/Logo";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";
import { useUsuario } from "../../hooks/useUsuario";

const Sidebar = ({ drawerWidth = 240, open, toggleDrawer }) => {
  const { usuario } = useUsuario();

  const drawerContent = (
    <Box sx={{ p: 2 }}>
      <Logo />
      <List disablePadding>
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Início</ListItemText>
        </ListItemButton>
        <ListItemButton component={Link} to="/acervo">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText>Acervo</ListItemText>
        </ListItemButton>
        {usuario.nivel === "adm" && (
          <ListItemButton component={Link} to="/excluidos">
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText>Livros Excluidos</ListItemText>
          </ListItemButton>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor="left"
        variant="permanent"
        open
        sx={{
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
          },
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
          },
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
