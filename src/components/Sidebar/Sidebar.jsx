import { Drawer } from "@mui/material";
import Logo from "../Logo/Logo";

const Sidebar = ({drawerWidth=240, open, toggleDrawer}) => {
    return (
        <>
            <Drawer
                anchor="left"
                variant='permanent'
                open
                sx={{
                    width: `${drawerWidth}px`,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: `${drawerWidth}px`,
                    },
                    display: {
                        xs: 'none',
                        md: 'block',
                    }
                }}
            >
                <Logo />

            </Drawer>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer}
                variant='temporary'
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    width: `${drawerWidth}px`,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: `${drawerWidth}px`,
                    },
                    display: {
                        xs: 'block',
                        md: 'none',
                    }
                }}
            >
                <Logo />

            </Drawer>
        </>
    );
}

export default Sidebar;