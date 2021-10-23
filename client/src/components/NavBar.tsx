import React from 'react'
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const NavBar: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Singularity</Typography>
                    <IconButton
                        color="inherit"
                        size="large"
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <DarkModeIcon />
                    </IconButton>
                    <Button color="inherit">Add</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar
