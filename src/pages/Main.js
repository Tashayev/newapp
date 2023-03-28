import React  from 'react';
import {Box, Container} from "@mui/material";
import SchoolList from "../components/School/SchoolList";
import SliderCourse from "../components/Course/SliderCourse";
import MainImage from "../components/MainImage";
import MobilePage from "./MobilePage";
import DescriptionComponents from "../components/DescriptionComponents";
const Main = () => {

    return (
        <Box sx={{display:"flex",  flexDirection:'column'}}>
            <Box sx={{display:{xs:'none', sm: 'none', md: 'block', }}}>
                <MainImage/>
                <SchoolList />
                <Container >
                    <SliderCourse/>
                </Container>
                <DescriptionComponents/>
            </Box>

            <MobilePage/>
        </Box>
    );
};
export default Main;