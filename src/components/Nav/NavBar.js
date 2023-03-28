import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {AppBar, Box, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import DropDownMenu from "./DropDownMenu"
import Banner from "./Banner";
import {NavLink} from "react-router-dom";
import {MAIN_ROUTE} from "../../utils/consts";
import LangMenu from "./LangMenu";
import LoginMenu from "./LoginMenu";
import Drawer from "../Drawer";
const NavBar = () => {
    return (
        <AppBar position="relative" sx={{ background:"#fff"}}>
            <Banner />
            <Box sx={{ display:'flex', justifyContent:'center', }}>
                <Toolbar sx={{display:"flex", height:"70px", width: 1100, justifyContent:'space-around'}}>
                    <Drawer/>
                    <NavLink to={MAIN_ROUTE} underline="none" style={{fontSize:"24px", color:"#333",}}>
                        Sprint-Z
                    </NavLink>
                    <Typography></Typography>
                    <Box sx={{background:"#f2f2f2", display:{xs:'none', sm: 'none', md: "flex"}, justifyContent:"space-between", color: "#828282", borderRadius:"5px", height:"50px", width:"650px"}}>
                        <DropDownMenu/>
                        <Box sx={{width: 400, maxWidth: '100%', color: "#828282", display: "flex", alignItems:"center",}}>
                            <TextField fullWidth placeholder="Что бы вы хотели изучит?" id="fullWidth" variant="standard" InputProps={{disableUnderline: true}} />
                        </Box>
                        <IconButton size="large" aria-label="search" style={{borderRadius:"0px"}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <LoginMenu/>
                    <LangMenu/>
                </Toolbar>
            </Box>
        </AppBar>
    );
};

export default NavBar;
