import React, {useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {styled} from "@mui/material/styles";
import axios from "axios";
import {Container, Link, Typography} from "@mui/material";

import {MAIN_ROUTE} from "../utils/consts";
import {NavLink, useParams} from "react-router-dom";
import PriceWin from "../components/Course/PriceWin";
import SchoolItem from "../components/School/SchoolItem";
import CourseTab from "../components/Course/CourseTab";


const CoursePage = () => {

    const [courses, setCourses] = useState([])

    let {pk} = useParams()
    useEffect(()=>{
        axios.get('https://app.sprintz.kz/api/v1/courses/'+pk+'/')
            .then(res=>{
                console.log(res.data)
                setCourses(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])
    const Pic = styled("div")({
        position: "relative",
        minWidth: '100vw',
        height: 353.5,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) , url(${courses.cover})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover',
        color: '#fff',

    });
const Nav = styled("NavLink")({
    textDecoration:"none",
    cursor:"pointer",
    color:"#fff",
    fontSize:13,

});
    function MyComponent() {
        return <div dangerouslySetInnerHTML={{__html:courses.description }}/>;}
    return (

        <Box >
            <Pic>
                <Container sx={{display:"flex", rowGap:2, flexDirection:"column"}}>
                    <Box sx={{display:"flex", columnGap:3, pt:3}}>
                        <Nav to={MAIN_ROUTE} >Главное </Nav>
                        <Nav>></Nav>
                        <Nav>Личностный рост</Nav>
                        <Nav>></Nav>
                        <Nav>Личностные изменения</Nav>
                    </Box>
                    <Box sx={{height:25, width:120, backgroundColor:"#219653", borderRadius:2}}>
                        <Typography sx={{display:"inherit", textAlign:"center", alignSelf:"center", fontFamily:"GothamPro", fontSize:13}}>
                            ONLINE
                        </Typography>
                    </Box>
                    <Typography sx={{fontWeight:"bold", fontSize:36}}>{courses.name}</Typography>
                    <Typography sx={{fontFamily:"GothamPro", fontSize:18}}>Изучи этот курс с нуля и ты станешь настоящим профессионалом в этой области</Typography>
                    <Typography sx={{fontWeight:"bold", fontFamily:"GothamPro", fontSize:16}}>This course was bought by {courses.purchases_cnt} people</Typography>
                </Container>
                <PriceWin  courses={courses}/>
            </Pic>
            <Container>
                {MyComponent()}


                <CourseTab courses={courses}/>
            </Container>

        </Box>
    );
};

export default CoursePage;