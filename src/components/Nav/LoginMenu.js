import React, {useContext} from 'react';
import {Avatar, Box, Button, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {AUTH_ROUTE, CABINET_ROUTE, STUDENT_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";

const LoginMenu = () => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
        <Box sx={{display:{xs:'none', sm: 'none', md: "flex", flexDirection:"row"}}}>
            {user.isStudent ?
                <Box
                    sx={{display:"inherit", color:"#333", columnGap:1}}

                >
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography>Name Surname</Typography>
                        <Typography sx={{textAlign:'end'}}>0Б</Typography>
                    </Box>
                    <Avatar
                        sx={{ width: 50, height: 50 }}
                        src='https://sprintz.kz/assets/img/temp/avatar.svg'
                        onClick={()=>history(CABINET_ROUTE)}
                    />
                </Box>
                :
                <Button
                    disableRipple
                    variant="outlined" sx={{width:"150px", height:"37px", color:"#333", borderColor:"#333",}}
                    onClick={()=>history(AUTH_ROUTE)}
                >
                    Войти
                </Button>
            }

        </Box>
    );
};

export default LoginMenu;