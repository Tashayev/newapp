import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {Avatar, Container, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import PriceWin from "../components/Course/PriceWin";
import CourseTab from "../components/Course/CourseTab";
import {fetchOneCourse} from "../http/courseAPI";
import CoursePic from "../components/Course/Pic";
import DescriptionComponents from "../components/DescriptionComponents";

const CoursePage = () => {
    const [course, setCourse] = useState([])
    const [reviews, setReviews] = useState([])
    let {pk} = useParams()
    useEffect(()=>{
        fetchOneCourse(pk).then(data =>setCourse(data))
        fetchOneCourse(pk + '/reviews').then(data => setReviews(data))
    }, [pk])
    const handleClickScroll = (e) => {
        const element = document.getElementById(e);
        const offset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };
    function MyComponent() {
        return <div dangerouslySetInnerHTML={{__html:course.description }}/>;}
    function returnNum(num){
        if(num===null){
            return 0;
        }
        return num;
    }
    return (
        <Box >
            <CoursePic course={course}/>
            <Box>
                <Box sx={{backgroundColor:'#f2f2f2', height:80, width:'100%', boxSizing:'content-box', display:{md:'flex', sm:'none',xs:'none'}, alignItems:"center", position:'sticky', top: 0, left: 0, right: 0, zIndex: 1,}}>
                    <Container sx={{display:'inherit', columnGap:2, cursor: "pointer", }}>
                        <Typography onClick={()=>{handleClickScroll('description')}}>Описание</Typography>
                        <Typography onClick={()=>{handleClickScroll('content')}}>Содержание курса</Typography>
                        <Typography onClick={()=>{handleClickScroll('teacher')}}>Учитель</Typography>
                        <Typography onClick={()=>{handleClickScroll('reviews')}}>Отзывы</Typography>
                    </Container>
                </Box>
                <Container sx={{pt:3, display:'flex', flexDirection:"column", rowGap:3}}>
                    <Box >
                        <Typography variant='h5' sx={{fontWeight:'bold'}} id='description'>Описание</Typography>
                        {MyComponent()}
                    </Box>
                    <PriceWin  course={course}/>
                    <Box >
                        <Typography variant='h5' sx={{fontWeight:'bold'}} id='content'>Содержание курса</Typography>
                        <Typography>Курс состоит из {course?.lessons_count} уроков</Typography>
                        <CourseTab course={course}/>
                    </Box>
                    <Box >
                        <Typography variant='h5' sx={{fontWeight:'bold'}} id='teacher'>Преподаватель</Typography>
                        <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'column', md:'row'}}}>
                            <Box sx={{display:'flex', flexDirection:'column', mr:10, mb:3, mt:3, rowGap:3}}>
                                <Avatar alt="avatar" src={course?.created_by?.avatar}  sx={{ width: 56, height: 56 }}/>
                                <Box>
                                    <Typography>Рейтинг</Typography>
                                    <Typography>{returnNum(course?.created_by?.tutor_profile?.rating)}</Typography>
                                </Box>
                                <Box>
                                    <Typography>Отзывов</Typography>
                                    <Typography>{reviews.count}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'column',  mb:3, mt:3, rowGap:3}}>
                                <Typography>{course?.created_by?.first_name} {course?.created_by?.last_name}</Typography>
                                <Typography>Организация: {course?.organization?.name_ru}</Typography>
                                <Typography>Специализация: {course?.created_by?.tutor_profile?.specialization}</Typography>
                                <Typography>Образование: Высшее</Typography>
                                <Typography>О себе: {course?.created_by?.tutor_profile?.bio}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box >
                        <Typography variant='h5' sx={{fontWeight:'bold'}} id='reviews'>Отзывы</Typography>
                        <Typography>Отзывы к этому курусу пока отсутсвуют.</Typography>
                    </Box>
                </Container>
            </Box>

        </Box>
    );
};

export default CoursePage;
