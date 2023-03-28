import React, {useState} from "react";
import {Box, FormControl, FormLabel, Link, OutlinedInput, Typography} from "@mui/material";
import Divider from '@mui/material/Divider';
import YellowButton from "../components/style/YellowButton";
import AuthForm from "../components/style/AuthForm";
import {styled} from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

const Student = () => {
    const [inputValues, setInputValues] = useState({ name: '',surname:'', email: '',});
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    }

    const isDisabled = Object.values(inputValues).some((value) => value === '');
    return (
        <Content >
            <Box className='sub-content'>
                <Box className='left-panel' >
                    <Typography>Мои аккаунт</Typography>
                    <Typography>Мои курсы</Typography>
                    <Typography>Выйти</Typography>
                </Box>
                <Divider
                    orintation='vertical'
                    flexItem
                    sx={{height:1000,borderWidth:1}}
                />
                <Box>
                    <Box sx={{p:'35px'}}>
                        <Typography sx={{    fontSize: '24px', fontWeight: 700}}>
                            МОИ АККАУНТ
                        </Typography>
                    </Box>
                    <Divider
                        flexItem
                        sx={{width:850,borderWidth:1}}
                    />
                    <Box sx={{p:'35px'}}>
                        <AuthForm sx={{gap: 2}}>
                            <FormControl>
                                <FormLabel>Имя</FormLabel>
                                <OutlinedInput
                                    size="md"
                                    type="text"
                                    placeholder="Введите имя"
                                    name="name"
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
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <OutlinedInput
                                    size="md"
                                    type="login"
                                    placeholder="Введите email"
                                    name="email"
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                            <Link >Изменить пароль</Link>
                            <YellowButton
                                disabled={isDisabled}
                                sx={{":disabled": {backgroundColor: 'gray'}}}
                            >
                                Сохранить
                            </YellowButton>
                        </AuthForm>
                    </Box>
                </Box>
            </Box>
        </Content>
    );
};

export default Student;
const Content = styled(Box)(() =>({
    display:'flex',
    justifyContent:'center',
    '.sub-content':{
        width: 1050,
        display:'inherit'
    },
    '.left-panel':{
        width:200,
        paddingTop:'35px',

        '.MuiTypography-root':{
            marginBottom:50,
            color:'#828282',
            fontWeight: 600,
            cursor:'pointer',
            '&:active':{
                color: '#333'
            }
        }
    }
}))
