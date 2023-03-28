import React, {useEffect, useState} from 'react';
import {Box, Button, Card,  Container, Typography} from "@mui/material";
import YellowButton from "../style/YellowButton";
const PriceWin = ({course}) => {
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
    function price(price){
        return Math.floor(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
    return (
        <Container sx={{display:"flex",   justifyContent:'end', width:'90vw', zIndex:100}}>
            <Card  sx={{display:"flex", position:{sm:'static', xs:'static', md:"fixed"},  alignSelf:"center", flexDirection:"column", p:3, mb:40, width: {xs:'100%',sm:'100%', md:200, lg:280}, boxShadow:{xs:'none',sm:'none', md:'0 5px 30px rgb(0 0 0 / 10%)'}}}>

                    <Typography sx={{ fontWeight:"bold", fontSize:36, textAlign:"center"}}>
                        {price(course.price)} ₸
                    </Typography>
                    <Button variant="contained"  sx={{backgroundColor:"#007aff", width:"100%", mb:2}}>
                        {price(course.price*0.8)} ₸ VIP аккаунт
                    </Button>
                    <YellowButton   sx={{ fontSize:24, width:"100%",  display:'block', mb:2}}>
                        Купить
                    </YellowButton>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",  width:'100%', }}>
                        <Typography sx={{display:"inherit", justifyContent:"start",fontSize:16, fontWeight:"light", fontFamily:"GothamPro", color:"#828282"}}>До конца осталось:</Typography>
                        <Typography sx={{display:"inherit", justifyContent:"end",fontSize:16, fontWeight:"bold", fontFamily:"GothamPro"}}>{day} дней {hour}:{minute}:{second}</Typography>
                    </Box>

            </Card>
        </Container>
    );
};

export default PriceWin;