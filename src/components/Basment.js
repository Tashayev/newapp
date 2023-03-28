import React from 'react';
import {Box, Container, Link, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {TEACHER_ROUTE} from "../utils/consts";


const Basement = () => {

    const navigate = useNavigate()
    return (
        <Box
            sx={{
                display: {xs:'none',sm: 'none', md: 'flex'}, alignSelf: 'end', backgroundColor: '#007aff', height: 265, mt: 10,boxSizing:'border-box'
            }}
        >
            <Container sx={{
                display:"flex", justifyContent:"center", mt:7,
                flexDirection:"row", color:"#fff", columnGap:25
            }}>
                <Box
                    sx={{
                        display:"flex", flexDirection:"column", rowGap:4
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight:600, fontSize:24
                        }}
                    >
                        Online University
                    </Typography>
                    <Typography>
                        Обучайтесь где бы вы не находились,<br/>
                        с кем бы вы не находились
                    </Typography>
                    <Link
                        sx={{
                            color:"#fff", textDecoration:"none", cursor:"pointer"
                        }}
                        onClick={()=>navigate(TEACHER_ROUTE)}
                    >
                        Учитель
                    </Link>
                </Box>
                <Box
                    sx={{
                        display:"flex", flexDirection:"column", rowGap:4
                    }}>
                    <Typography
                        sx={{
                            fontWeight:600,
                        }}>
                        Информация
                    </Typography>
                    <Link
                        sx={{
                            color:"#fff", textDecoration:"none", cursor:"pointer"
                        }}>
                        Реквизиты компании
                    </Link>
                    <Link
                        sx={{
                            color:"#fff", textDecoration:"none", cursor:"pointer"
                        }}>
                        Политика конфиденциальности
                    </Link>
                    <Link
                        sx={{
                            color:"#fff", textDecoration:"none", cursor:"pointer"
                        }}>
                        Пользовательское соглашение
                    </Link>
                </Box>
                <Box
                    sx={{
                        display:"flex", flexDirection:"column", rowGap:4
                    }}>
                    <Typography
                        sx={{
                            fontWeight:600,
                        }}>
                        Контакты
                    </Typography>
                    <Typography >
                        +7 701 555 81 55
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Basement;