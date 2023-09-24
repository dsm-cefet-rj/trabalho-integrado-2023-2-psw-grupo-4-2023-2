import { Box, Drawer, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';

const Sidebar = ({ drawerWidth = 240, open, toggleDrawer }) => {
  const drawerContent = (
    <Box sx={{mt:2, ml:2}} color={'grey'}>
      <Typography variant="body2" marginBottom={'4px'}>Descubra seu livro:</Typography>
      <Typography variant="body1" display={"flex"} alignItems={"center"}><HomeIcon color="disabled" fontSize="small"/>Início</Typography>
      <Typography variant="body1" display={"flex"} alignItems={"center"}><BookIcon color="disabled" fontSize="small"/>Acervo</Typography>
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
        <Logo />
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
        <Logo />
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
