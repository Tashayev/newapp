import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, Container, Typography} from "@mui/material";
const PriceWin = ({courses}) => {

    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()
    let interval
    const startTimer = ()=>{
        const deadline = new Date(2024, 3, 1);
        interval = setInterval(() => {
            const  diff = deadline - new Date()
            const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
            const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) %24 : 0;
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60 ) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000 ) % 60 : 0;
            if (diff < 0) {
                clearInterval(interval.current);
            }else {
                setDay(days);
                setHour(hours);
                setMinute(minutes);
                setSecond(seconds);
            }
        });
    }
    useEffect(()=> {
        startTimer()
    })
    return (
        <Container sx={{display:"flex", maxWidth: 254, justifyContent:"end"}}>
            <Card  sx={{display:"flex", position:"fixed",  alignSelf:"center", flexDirection:"column", p:3}}>
                <CardContent sx={{display:"inherit",flexDirection:"column"}}>
                    <Typography sx={{ fontWeight:"bold", fontSize:36, textAlign:"center"}}>
                        {Math.floor(courses.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸
                    </Typography>
                </CardContent>
                <CardActions sx={{display:"flex", flexDirection:"column", rowGap:2}}>
                    <Button variant="contained"  sx={{backgroundColor:"#007aff", width:"98%",  p:"1%"}}>
                        {Math.floor(courses.price*0.8).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸ VIP аккаунт
                    </Button>
                    <Button variant="contained"  sx={{ fontSize:24, width:"98%",  p:"1%"}} color="warning">
                        Купить
                    </Button>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <Typography sx={{display:"inherit", justifyContent:"start",fontSize:16, fontWeight:"light", fontFamily:"GothamPro", color:"#828282"}}>До конца осталось:</Typography>
                        <Typography sx={{display:"inherit", justifyContent:"end",fontSize:16, fontWeight:"bold", fontFamily:"GothamPro"}}>{day} дней {hour}:{minute}:{second}</Typography>
                    </Box>
                </CardActions>
            </Card>
        </Container>
    );
};

export default PriceWin;