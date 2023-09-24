import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";

const Principal = ({ drawerWidth = 240 }) => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
            <Sidebar drawerWidth={drawerWidth} open={open} toggleDrawer={toggleDrawer} />
            <Container maxWidth='xl' sx={{mt: '64px' }}>
                <Outlet />
            </Container>
        </Box>
    );
}

export default Principal;