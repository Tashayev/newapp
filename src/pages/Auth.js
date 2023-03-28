import * as React from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Link,
    Typography,
    OutlinedInput,
    ToggleButton,
    InputAdornment, IconButton
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import AuthForm from "../components/style/AuthForm";
import YellowButton from "../components/style/YellowButton";
import {useNavigate} from "react-router-dom";
import {REGISTRATION_ROUTE} from "../utils/consts";


const Auth = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <AuthForm
            sx={{ mx: 'auto', my: 4, py: 3, px: 2, gap: 2}}
        >
            <Typography className='text'>Войти как ученик</Typography>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <OutlinedInput
                    size="md"
                    type="login"
                    placeholder="Введите email"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Пароль</FormLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    placeholder="Введите пароль"
                />
            </FormControl>
            <Link>Забыли пароль?</Link>
            <YellowButton variant="contained" >
                Войти
            </YellowButton>
            <Typography className="small-text">Войти через</Typography>
            <Box className='wrapper'>
                <ToggleButton value='any' sx={{backgroundImage:'url("https://sprintz.kz/assets/img/social/vk.jpg")'}} ></ToggleButton>
                <ToggleButton value='any' sx={{backgroundImage:'url("https://sprintz.kz/assets/img/social/google.jpg")'}} ></ToggleButton>
                <ToggleButton value='any' sx={{backgroundImage:'url("https://sprintz.kz/assets/img/social/facebook.jpg")'}}></ToggleButton>
            </Box >
            <Link onClick={()=>navigate(REGISTRATION_ROUTE)}>Зарегистрироваться</Link>
        </AuthForm>
    );
};

export default Auth;