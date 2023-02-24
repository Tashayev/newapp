import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {styled} from "@mui/material/styles";
import {Container, Typography} from "@mui/material";
import {MAIN_ROUTE} from "../utils/consts";
import {useParams} from "react-router-dom";
import PriceWin from "../components/Course/PriceWin";
import CourseTab from "../components/Course/CourseTab";
import {fetchOneCourse} from "../http/courseAPI";
const CoursePage = () => {
    const [course, setCourse] = useState([])
    let {pk} = useParams()
    useEffect(()=>{
        fetchOneCourse(pk).then(data =>setCourse(data))
    }, [])
    console.log(course)
    const Pic = styled("div")({
        position: "relative",
        minWidth: '100vw',
        height: 353.5,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) , url(${course.cover})`,
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
        return <div dangerouslySetInnerHTML={{__html:course.description }}/>;}
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
                    <Typography sx={{fontWeight:"bold", fontSize:36}}>{course.name}</Typography>
                    <Typography sx={{fontFamily:"GothamPro", fontSize:18}}>Изучи этот курс с нуля и ты станешь настоящим профессионалом в этой области</Typography>
                    <Typography sx={{fontWeight:"bold", fontFamily:"GothamPro", fontSize:16}}>This course was bought by {course.purchases_cnt} people</Typography>
                </Container>
            </Pic>
            <Box><PriceWin  course={course}/>
                <Container>
                    {MyComponent()}
                    <CourseTab course={course}/>
                </Container>

            </Box>
        </Box>
    );
};

export default CoursePage;