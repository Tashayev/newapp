import React, {useEffect, useState} from 'react';
import AuthForm from "../components/style/AuthForm";
import {
    Box,
    FormControl,
    FormLabel,
    IconButton,
    InputAdornment,
    Link,
    OutlinedInput,
    ToggleButton,
    Typography
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import YellowButton from "../components/style/YellowButton";
import {AUTH_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({ name: '',surname:'', email: '', password:'', password2:'' });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const title = 'Зарегистрироваться как ученик'
    useEffect(() => document.title = title, [])
    const isDisabled = Object.values(inputValues).some((value) => value === '');
    return (
        <AuthForm sx={{ mx: 'auto', my: 4, py: 3, px: 2, gap: 2}}  onSubmit={handleSubmit}>
            <Typography
                className="text"
            >
                {title}
            </Typography>
            <Typography
                className="small-text"
            >
                Зарегистрироваться через
            </Typography>
            <Box className='wrapper'>
                <ToggleButton
                    value='any'
                    sx={{backgroundImage:'url("https://sprintz.kz/assets/img/social/vk.jpg")'}}
                />
                <ToggleButton
                    value='any'
                    sx={{backgroundImage:'url("https://sprintz.kz/assets/img/social/google.jpg")'}}
                />
                <ToggleButton
                    value='any'
                    sx={{backgroundImage:'url("https://sprintz.kz/assets/img/social/facebook.jpg")'}}
                />
            </Box >
            <FormControl>
                <FormLabel>Имя</FormLabel>
                <OutlinedInput
                    size="md"
                    type="text"
                    placeholder="Введите имя"
                    name="name"
                    value={inputValues.name}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Фамилия</FormLabel>
                <OutlinedInput
                    size="md"
                    type="text"
                    placeholder="Введите фамилию"
                    name="surname"
                    value={inputValues.surname}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>
                    Email
                </FormLabel>
                <OutlinedInput
                    size="md"
                    type="login"
                    placeholder="Введите email"
                    name="email"
                    value={inputValues.email}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl variant="standard">
                <FormLabel>
                    Номер телефона
                </FormLabel>
                <OutlinedInput
                    size="md"
                    type="text"
                    placeholder="Введите фамилию"
                />
            </FormControl>
            <FormControl>
                <FormLabel>
                    Пароль
                </FormLabel>
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
                    name="password"
                    value={inputValues.password}
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Подтверждение пароля</FormLabel>
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
                    placeholder="Введите повторно пароль"
                    name="password2"
                    value={inputValues.password2}
                    onChange={handleInputChange}
                />
            </FormControl>
            <YellowButton
                disabled={isDisabled}
                sx={{":disabled": {backgroundColor: 'gray'}}}
            >
                Зарегистрироваться
            </YellowButton>
            <Link
                onClick={()=>navigate(AUTH_ROUTE)}
            >
                Войти в свой аккаунт
            </Link>
        </AuthForm>
    );
};
export default RegistrationPage;