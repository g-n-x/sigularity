import React, { BaseSyntheticEvent, useCallback } from 'react'
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

import api from '../service/api'

const NavBar: React.FC = () => {
    const handleSendFile = useCallback(async (e: BaseSyntheticEvent) => {
        const files: FileList = e.target.files
        const data = new FormData()
        data.append('content', files[0])
        const r = await api.post('/image', data)
        console.log(r)
    }, [])
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
                    
                    <label htmlFor="file-send">
                        <input
                            type="file"
                            name="file-send"
                            id="file-send"
                            style={{ display: 'none' }}
                            onChange={handleSendFile}
                        />
                        <Button
                            component="span"
                            color="inherit"
                        >
                            Add
                        </Button>
                    </label>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar
