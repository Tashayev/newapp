import React, {useContext, useEffect, useState} from 'react';
import {Breadcrumbs, Link} from "@mui/joy";
import {Context} from "../index";
import {Box, Typography} from "@mui/material";
import {NavLink, useParams} from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {MAIN_ROUTE} from "../utils/consts";
const CategoryPage = () => {
    const {id}= useParams()
    const {course_category}= useParams()
    const {categories} = useContext(Context)
    const [parent, setParent] = useState(0)
    const [child, setChild] = useState(0)
    useEffect(() => {
        function getByCategory(){
        const filter = categories?.find((item) =>  item?.id === Number(id))
        const filterChild =  parent?.children?.find(item =>item?.locales[0]?.course_category === Number(course_category))
            setParent(filter )
            setChild(filterChild)
        }
        if({id, course_category}){
            getByCategory();
        }
    }, [id, course_category, categories, ]);
    function handleClick(event) {
        event.preventDefault();
    }
    return (
        <Box>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <NavLink color="inherit" to={MAIN_ROUTE}>
                    Главное
                </NavLink>
                <Link color="inherit"  onClick={handleClick}>
                    {parent?.code}
                </Link>
                <Typography color="textPrimary">
                    {child?.code}
                </Typography>
            </Breadcrumbs>
        </Box>
    );
};
export default CategoryPage;