import React, {useContext, useEffect, useState} from 'react';
import {Box, Card, CardMedia, Container, Typography,} from "@mui/material";
import {styled} from "@mui/material/styles";
import ban from "../components/assets/flag.png";
import {useParams} from "react-router-dom";

import {Context} from "../index";
import {fetchOneOrganization} from "../http/courseAPI";
import CourseItem from "../components/Course/CourseItem";
import DescriptionComponents from "../components/DescriptionComponents";
const SchoolPage = () => {
    const {courses} = useContext(Context)
    const [organization, setOrganization] = useState()
    const {pk} = useParams()
    useEffect(()=>{
        fetchOneOrganization(pk).then(data =>setOrganization(data))
    }, [pk])


    useEffect(() => document.title = organization?.name_ru, [organization?.name_ru])
    return(
        <>
            <Box sx={{display: 'flex', flexDirection:"column", maxWidth:"100vw"}} >
                <Pic/>
                <Container sx={{mb:3}}>
                    <Card
                        sx={{ display:'flex',
                            maxWidth: 220,
                            height:270,
                            position:"absolute",
                            mt:-8,
                            border:"3px solid #efefef"
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={organization?.logo}
                            alt="Live from space album cover"
                        />
                    </Card>
                    <Box sx={{ml: 35, pt: 3, color:"#333"}}>
                        <Typography sx={{ fontWeight:700, fontSize:36, }} component={'span'}>{organization?.name_ru}</Typography>
                        <Typography sx={{fontSize:16, fontWeight:400}} component={'span'}>{organization?.description_ru}</Typography>
                    </Box>
                    <Typography sx={{ fontWeight:700, fontSize:24, color:"#333", }} component={'span'}>
                        <Box sx={{mt:20, mb:3}}>Популярные курсы</Box>
                        <Container sx={{display:'flex', flexDirection:'row', columnGap:4}}>
                            {courses?.map((course, index) =>
                                index < 4 ? <CourseItem course={course} key={course.pk}/> : null
                            )}
                        </Container>

                    </Typography>

                </Container>

            </Box>
            <DescriptionComponents/>
        </>
    );
};
export default SchoolPage;
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