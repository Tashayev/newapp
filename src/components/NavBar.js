import React /*{useContext}*/, {useContext} from 'react';

import SearchIcon from '@mui/icons-material/Search';
import {Context} from "../index";
import {useNavigate} from "react-router-dom"
// import {TEACHER_ROUTE, LOGIN_ROUTE, STUDENT_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {AppBar, Box, Button, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import CustomizedMenus from "./banner/CustomizedMenus"
import Banner from "./banner/Banner";
import {NavLink} from "react-router-dom";

import {MAIN_ROUTE} from "../utils/consts";
import LangMenu from "./banner/LangMenu";
import {AccountCircle} from "@mui/icons-material";
const NavBar = observer(() => {
    // const {teacher} = useContext(Context)//36п.
    const {user} = useContext(Context)
    const history = useNavigate()

    return (

            <AppBar position="relative" >
                <Banner/>
                <Toolbar sx={{display:"flex", justifyContent:"space-around",height:"70px", background:"#fff"}}>

                    <NavLink to={MAIN_ROUTE} underline="none" style={{fontSize:"24px", color:"#333"}}>
                        Sprint-Z
                    </NavLink>
                    <div style={{background:"#f2f2f2", display:"flex", justifyContent:"space-between",color: "#828282", borderRadius:"5px", height:"50px", width:"650px"}}>
                        <Box >
                            <CustomizedMenus/>
                        </Box>
                        <Box sx={{width: 400, maxWidth: '100%', color: "#828282", display:"flex", alignItems:"center",}}>
                            <TextField fullWidth placeholder="Что бы вы хотели изучит?" id="fullWidth" variant="standard" InputProps={{disableUnderline: true}} />
                        </Box>
                        <IconButton size="large" aria-label="search" style={{borderRadius:"0px"}}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <div sx={{display:"flex", flexDirection:"row"}}>
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
                                onClick={() => user.setIsStudent(true)}
                            >
                                Войти
                            </Button>
                        }
                        <LangMenu/>
                    </div>


                </Toolbar>
            </AppBar>
    );
});

export default NavBar;
                 /*<NavLink style={{color:'white'}} to={MAIN_ROUTE}>КупиДевайс</NavLink>
                 {user.isStudent ?//user.isAuth - здесь для авторизованных
                     <link className="ml-auto" style={{color: 'white'}}>
                         <Button>
                             Выйти
                         </Button>
                     </link>
                     :user.isAuth - здесь для не авторизованных
                     <link className="ml-auto" style={{color: 'white'}}>
                         <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>{history(ADMIN_ROUTE)
                         </link>
                     }
                     */