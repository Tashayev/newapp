import React, {useContext} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Context} from "../../index";
import {useNavigate} from "react-router-dom"
import {observer} from "mobx-react-lite";
import {AppBar, Box, Button, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import CustomizedMenus from "./CustomizedMenus"
import Banner from "./Banner";
import {NavLink} from "react-router-dom";
import {AUTH_ROUTE,  MAIN_ROUTE} from "../../utils/consts";
import LangMenu from "./LangMenu";
import {AccountCircle} from "@mui/icons-material";
import LoginMenu from "./LoginMenu";
const NavBar = observer(() => {

    return (
        <AppBar position="relative" >
            <Banner/>
            <Toolbar sx={{display:"flex", justifyContent:"space-around",height:"70px", background:"#fff"}}>
                <NavLink to={MAIN_ROUTE} underline="none" style={{fontSize:"24px", color:"#333"}}>
                    Sprint-Z
                </NavLink>
                <Box style={{background:"#f2f2f2", display:"flex", justifyContent:"space-between",color: "#828282", borderRadius:"5px", height:"50px", width:"650px"}}>
                    <Box >
                        <CustomizedMenus/>
                    </Box>
                    <Box sx={{width: 400, maxWidth: '100%', color: "#828282", display:"flex", alignItems:"center",}}>
                        <TextField fullWidth placeholder="Что бы вы хотели изучит?" id="fullWidth" variant="standard" InputProps={{disableUnderline: true}} />
                    </Box>
                    <IconButton size="large" aria-label="search" style={{borderRadius:"0px"}}>
                        <SearchIcon />
                    </IconButton>
                </Box>
                <LoginMenu/>
                <LangMenu/>
            </Toolbar>
        </AppBar>
    );
});

export default NavBar;
