import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, Container, Typography,} from "@mui/material";
import {styled} from "@mui/material/styles";
import ban from "../components/assets/flag.png";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {COURSE_ROUTE} from "../utils/consts";




const Pic = styled("div")({
    position: "relative",
    minWidth: '100vw',
    height: 256,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) , url(${ban})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    color: '#fff',

});


const SchoolPage = () => {
    const [data, setDate] = useState([])
    const [courses, setCourse] = useState([])
    useEffect(()=>{
        axios.get('https://app.sprintz.kz/api/v1/organizations/1')
            .then(res=>{
                console.log(res.data)
                setDate(res.data)
                setCourse(res.data.courses)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])

    const nav = useNavigate()
    return (

        <Box sx={{ display: 'flex', flexDirection:"column", maxWidth:"100vw"}} >
            <Pic/>
            <Container sx={{mb:3}}>
                <Card sx={{ display: 'flex', maxWidth: 220, height:270, position:"absolute", mt:-8, border:"3px solid #efefef" }}>
                    <CardMedia
                        component="img"
                        image={data.logo}
                        alt="Live from space album cover"
                    />
                </Card>
                <Box sx={{ml: 35, pt: 3, color:"#333"}}>
                    <Typography sx={{ fontWeight:700, fontSize:36, }}>{data.name_ru}</Typography>
                    <Typography sx={{fontSize:16, fontWeight:400}}>{data.description_ru}</Typography>
                </Box>
                <Typography sx={{ fontWeight:700, fontSize:24, color:"#333", }}>
                    <Box sx={{mt:20, mb:3}}>Популярные курсы</Box>
                    <Box
                        sx={{display:"flex", flexDirection:"row", columnGap:3}}
                    >
                        {courses.map(course =>

                            <Card
                                sx={{ maxWidth: 269, cursor:"pointer",}}
                                onClick={async ()=>nav(COURSE_ROUTE + '/' + course.pk)}

                            >
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={course.cover}
                                />
                                <CardContent>
                                    <Typography sx={{fontWeight:"bold", fontSize:16}}>
                                        {course.name}
                                    </Typography>
                                    <Typography sx={{fontSize:14, fontWeight:"light"}}>
                                        {course.created_by.first_name} {course.created_by.last_name}
                                    </Typography>
                                    <Typography sx={{fontSize:14}}>
                                        Количество уроков: {course.lessons_count}
                                    </Typography>
                                    <Typography sx={{textAlign:"end", fontWeight:"bold", fontSize:18}}>
                                        {Math.floor(course.price)} ₸
                                    </Typography>
                                </CardContent>

                            </Card>

                        )}
                    </Box>
                    <Box sx={{mt:5}}>Как это работает?</Box>
                </Typography>
            </Container>
            <Container sx={{ display: 'flex', flexDirection:"row", flexWrap:"wrap", columnGap:3, maxWidth:"100vw", mb:3}}>
                <Card sx={{boxShadow:0, width:310}}>
                    <CardMedia sx={{width:100, height:100}}
                        component="img"
                        image="https://sprintz.kz/assets/img/network.svg"
                        alt="Live from space album cover"
                    />
                    <Typography sx={{fontWeight:"bold"}}>
                        Доступность
                    </Typography >
                    <Typography sx={{fontSize:14, fontWeight:"light"}}>
                        Обучайтесь где бы вы не находились, с кем бы вы не находились
                    </Typography>
                </Card>
                <Card sx={{boxShadow:0, width:310}}>
                    <CardMedia sx={{width:100, height:100}}
                        component="img"
                        image="https://sprintz.kz/assets/img/play.svg"
                        alt="Live from space album cover"
                    />
                    <Typography sx={{fontWeight:"bold"}}>
                        Прозрачность
                    </Typography>
                    <Typography sx={{fontSize:14, fontWeight:"light"}}>
                        Все курсы будут доступны после покупки для повторного прохождения
                    </Typography>
                </Card>

                <Card sx={{boxShadow:0, width:310}}>
                    <CardMedia sx={{width:113, height:100, border:"none"}}
                        component="img"
                        image="https://sprintz.kz/assets/img/armchair.svg"
                        alt="Live from space album cover"
                    />
                    <Typography sx={{fontWeight:"bold"}}>
                        Удобство
                    </Typography>
                    <Typography sx={{fontSize:14, fontWeight:"light"}}>
                        Вы можете приобрести любые курсы в любое время
                    </Typography>
                </Card>
            </Container>

        </Box>
    );
};
export default SchoolPage;