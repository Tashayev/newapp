import React from 'react';
import {styled} from "@mui/material/styles";
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {MAIN_ROUTE} from "../../utils/consts";

const CoursePic = ({course}) => {
    const Pic = styled("div")({
        position: "relative",
        boxSizing:'content-box',
        width: '100%',
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
    return (
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
    );
};

export default CoursePic;