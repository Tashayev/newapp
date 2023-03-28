import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import React, {useContext} from 'react';
import {Context} from "../../index";
import CourseItem from "./CourseItem";

import {Box, Typography} from "@mui/material";
let slidesToShow = 4;
const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick, currentSlide } = props;
    return (
        <>
            {currentSlide !== 0 && (
                <div className={className} onClick={onClick}>
                    <ArrowBackIos style={{ color: '#3f3f3f', fontSize: '20px', paddingLeft:13}} />
                </div>
            )}
        </>
    );
};
const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    console.log(props);
    return (
        <>
            {currentSlide !== slideCount - slidesToShow && (
                <div className={className} onClick={onClick}>
                    <ArrowForwardIos style={{ color: '#3f3f3f', fontSize: '20px', }} />
                </div>
            )}
        </>
    );
};

const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    infinite: false,
};

const SliderCourse = () => {
    const {courses} = useContext(Context)

    return (
        <Box  className='carousel' sx={{mb:6}}>
            <Box sx={{ display: { xs:'none', sm: 'none', md: 'block'}}}>
                <Typography sx={{fontSize:24, fontWeight:700, color:"#333", pb:3, ml:3}}>
                    Курсы
                </Typography>
                <div>
                    <Slider {...carouselProperties} style={{paddingLeft:15}}>
                        {courses?.map(course =><Box className='wrapper'><CourseItem course={course} key={course.pk}/></Box>)}
                    </Slider>
                </div>
            </Box>
        </Box>

    );
};
export default SliderCourse;