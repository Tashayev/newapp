import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {COURSE_ROUTE} from "../../utils/consts"
import {useNavigate} from "react-router-dom";
const CourseItem = ({course}) => {
    const nav = useNavigate()
    return (
        <Card
            sx={{maxWidth:{ sm:650, md:230, lg:259}, cursor:"pointer", m:1, }}
            onClick={ ()=>nav(COURSE_ROUTE + '/' + course?.pk)}>
            <CardMedia
                component="img"
                height="150"
                image={course?.cover}
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
    );
};
export default CourseItem;