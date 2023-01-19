import React, {useContext} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Context} from "../../index";
import {useNavigate} from "react-router-dom"
import {observer} from "mobx-react-lite";
import {AppBar, Box, Button, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import CustomizedMenus from "./CustomizedMenus"
import Banner from "./Banner";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../../utils/consts";
import LangMenu from "./LangMenu";
import {AccountCircle} from "@mui/icons-material";
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
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
                <Box style={{display:"flex", flexDirection:"row"}}>
                    {user.isStudent ?
                        <Typography sx={{display:"inherit", color:"black"}}>
                            Name Surname
                            <br/> 0Б
                            <IconButton
                                color="primary"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Typography>
                        :
                        <Button
                            variant="outlined" sx={{width:"150px", height:"37px", color:"#333", borderColor:"#333"}}
                            onClick={()=>history(LOGIN_ROUTE)}
                        >
                            Войти
                        </Button>
                    }
                    <LangMenu/>
                </Box>
            </Toolbar>
        </AppBar>
    );
});

export default NavBar;
