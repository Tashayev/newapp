import React, {useContext} from 'react';
import {Box, Button, IconButton, Typography} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import {AUTH_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";

const LoginMenu = () => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
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
                    variant="outlined" sx={{width:"150px", height:"37px", color:"#333", borderColor:"#333", mr:3}}
                    onClick={()=>history(AUTH_ROUTE)}
                >
                    Войти
                </Button>
            }

        </Box>
    );
};

export default LoginMenu;