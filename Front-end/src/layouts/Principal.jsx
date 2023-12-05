import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import { useState } from "react";
import Modal from "../components/Modal";
import { useControlador } from "../hooks/useControlador";

const Principal = ({ drawerWidth = 240 }) => {
  const [open, setOpen] = useState(false);
 const {tipoModal} = useControlador();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #031881, #1475a1 100vh);",
        }}
      >
        <Navbar drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
        <Sidebar
          drawerWidth={drawerWidth}
          open={open}
          toggleDrawer={toggleDrawer}
        />
        <Container
          maxWidth="xl"
          sx={{
            mt: "64px",
            position: "relative",
            width: { md: `calc(100vw - ${drawerWidth}px)` },
          }}
        >
          <Outlet />
        </Container>
      </Box>
      <Footer drawerWidth={drawerWidth} />
      <Modal variant={tipoModal} />
    </>
  );
};

export default Principal;
