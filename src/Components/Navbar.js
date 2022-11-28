import React from "react"; 

import { AppBar, Toolbar, Typography, Button, Stack, styled, Menu, MenuItem } from "@mui/material"
import logo from "../Assets/logo/logo185x185 Kopie.png"
import LanguageIcon from '@mui/icons-material/Language'; 
import EasyLanguage from "../Assets/logo/Icon-Easy-Language (1) (1).png"; 



const Logo = styled('img')(() => ({
    width: '1rem',
    minWidth: '2rem',
})); 

const EL = styled('img')(() => ({
    width: '1rem',
    minWidth: '1.5rem',
    color: 'black',
})); 


export const MuiNavbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null)

const handleClose = () => {
    setAnchorEl(null)
}

   const openMenu = (event) => {
    setAnchorEl(event.currentTarget)
   }

   

    return (
        <AppBar position='static' color="default"> 
            <Toolbar>
            <Logo src={logo} onClick="/home"  /> 
            <Typography variant="title" color="inherit" noWrap>
              &nbsp;
            </Typography>
            <Typography variant="title" color="inherit" noWrap>
              &nbsp;
            </Typography>
            <Typography variant='h6' component="div" spacing = {2} sx={{ flexGrow: 3}}>
              Sozialkompass
            </Typography>
            <Stack direction="row" spacing={2}></Stack>
                <Button color="inherit"> Antragsübersicht</Button>
                <Button color="inherit">
                    <EL src={EasyLanguage} />  </Button>
                <Button onClick={openMenu} color="inherit">
                    <LanguageIcon />  </Button>
                    <Menu 
                    id = "lame-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open = {Boolean(anchorEl)}
                    onClose = {handleClose} >
                        <MenuItem onClick={handleClose}> Deutsch</MenuItem>
                        <MenuItem onClick={handleClose}> English</MenuItem>
                        <MenuItem onClick={handleClose}> українська</MenuItem>
                    </Menu>
            </Toolbar>
        </AppBar>

    )
}