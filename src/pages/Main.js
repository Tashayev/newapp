import React, {useContext, useEffect, useRef, useState} from 'react';
import {Box, Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import smoothscroll from 'smoothscroll-polyfill'
import ban from "../components/assets/banner-3.jpg"
import {styled} from "@mui/material/styles";
import SchoolList from "../components/School/SchoolList";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Container} from "@mui/joy";
import CourseItem from "../components/Course/CourseItem";
const Image = styled("div")({
    position: "relative",
    minWidth: '100vw',
    height: 400,
    backgroundImage: `url(${ban})`,
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
const Main = observer(() => {
    const ref = useRef()
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    smoothscroll.polyfill()
    const {courses} = useContext(Context)
    return (
        <Box sx={{rowGap:5}}>
            <Image >
                <div>
                    <Typography style={{fontSize:48, fontWeight:700, textAlign:'center'}}>
                        От прохождения курсов
                        <br/> до получения ученых степеней
                    </Typography>
                    <br/>
                    <Typography style={{fontSize:36, fontWeight:400, textAlign:'center'}}>
                        100% онлайн-обучение <br/>
                        от лучших университетов и компаний мира
                    </Typography>
                </div>
            </Image>
            <SchoolList />
            <Container sx={{mt:5}}>
                <Typography sx={{fontSize:24, fontWeight:700, color:"#333", pb:3}}>
                    Курсы
                </Typography>
                <Container sx={{display:'flex', flexDirection:'row', columnGap:4,  scrollBehavior:'smooth'}}>
                    <button onClick={() => scroll(-20)}><i className="fa-solid fa-chevron-left"></i></button>
                        {courses?.map(course =><CourseItem course={course} key={course.pk} />)}
                    <button onClick={() => scroll(20)}><i className="fa-solid fa-chevron-right"></i></button>

                </Container>
            </Container>
        </Box>
    );
});
export default Main;