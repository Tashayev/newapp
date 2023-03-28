import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import {Link, Box} from '@mui/material';
import {NavLink} from "react-router-dom";
import {AUTH_ROUTE, MAIN_ROUTE} from "../utils/consts";



const SideDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    return (

        <Box  sx={{ display: {xs: 'flex', sm: 'flex', md: 'none'}}}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer}
            color="#333"

            >
                <MenuIcon/>
            </IconButton>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                sx={{display: {sm:'flex',md:'none'}}}

            >
                <Box  sx={{width: '70vw',p:5, display:"flex", flexDirection:'column', rowGap:3, }}>
                    <NavLink to={MAIN_ROUTE} style={{textDecoration:'none', cursor:'pointer', color:'#111'}}>Все курсы</NavLink>
                    <NavLink to={AUTH_ROUTE} style={{textDecoration:'none', cursor:'pointer', color:'#111' }}>Войти</NavLink>
                    <Link  style={{textDecoration:'none', cursor:'pointer', color:'#111'}}>Зарегистрироваться</Link>
                </Box>
            </Drawer>
        </Box>

    );
};

export default SideDrawer;