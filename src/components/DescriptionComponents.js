import React from 'react';
import {Box, Card, CardMedia, Typography} from "@mui/material";
const assets= [
    {
        header:'Доступность',
        image:'https://sprintz.kz/assets/img/network.svg',
        text:'Обучайтесь где бы вы не находились, с кем бы вы не находились'
    },
    {
        header:'Прозрачность',
        image:'https://sprintz.kz/assets/img/play.svg',
        text:'Все курсы будут доступны после покупки для повторного прохождения'
    },
    {
        header:'Удобство',
        image:'https://sprintz.kz/assets/img/armchair.svg',
        text:'Вы можете преопрести любые курсы в любое время'
    }
]
const DescriptionComponents = () => {
    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{ display: {xs:'none',sm:'none',md:'flex'}, flexDirection:"column",   width:1080, }}>
                <Typography sx={{pb:3, fontSize: 24, fontWeight: 700}}>Как это работает?</Typography>
                <Box sx={{ display: 'flex', flexDirection:"row",columnGap:3, }}>
                    {assets.map(item =>
                        <Card sx={{boxShadow:0, width:310,display: 'flex', flexDirection:"column", rowGap:3}}>
                            <CardMedia sx={{height:100, objectFit:'fill', width:'40%'}}
                                       component="img"
                                       image={item.image}
                                       alt="Live from space album cover"
                            />
                            <Typography sx={{fontWeight:"bold"}} component={'span'}>
                                {item.header}
                            </Typography >
                            <Typography sx={{fontSize:14, fontWeight:"light"}} component={'span'}>
                                {item.text}
                            </Typography>
                        </Card>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default DescriptionComponents;