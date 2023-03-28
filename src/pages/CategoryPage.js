import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {CATEGORY_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {styled} from "@mui/material/styles";
const CategoryPage = () => {
    const {id}= useParams()
    const {course_category}= useParams()
    const [parent, setParent] = useState(0)
    const [child, setChild] = useState(0)
    const {categories} = useContext(Context)

    useEffect(() => {
        function getByCategory(){
            const filter = categories?.find((item) =>  item?.id === Number(id))
            setParent(filter)
            const filterChild = parent?.children?.find(item =>item?.locales[0].course_category === Number(course_category)  )

            setChild(filterChild)
        }
        if({course_category}){
            getByCategory();
        }
    }, [course_category, id, categories, child, parent?.children]);
function setContent(){
    let content = ''
    if(course_category===undefined){
        content = parent?.code
    }else{
        content = child?.code
    }
    return content
}

const nav = useNavigate()
    return (
        <Category >
            <Box className='wrapper' >
                <Breadcrumbs sx={{display: {xs:'none', sm:'none', md:'inherit'}}}
                    separator={
                        <NavigateNextIcon fontSize="small" />
                    }
                    aria-label="breadcrumb"
                >
                    <Link  onClick={()=>nav(MAIN_ROUTE)}>
                        Главное
                    </Link>
                    <Link onClick={()=>nav(CATEGORY_ROUTE+'/'+parent.id)}>
                        {parent?.code}
                    </Link>
                    {course_category !== undefined ?
                        <Link >
                            {child?.code}
                        </Link>
                        :null
                    }
                </Breadcrumbs>
                <Box className='header'>
                    <Typography sx={{pb:2, fontSize: 36, fontWeight: 700}}>{setContent()}</Typography>
                    <Typography >
                        Найдите курс по вашим интересам. <br/>
                        Получите знания онлайн от топовых университетов и образовательных школ
                    </Typography>

                </Box>
            </Box>
        </Category>
    );
};
export default CategoryPage;
const Category = styled('Box')({
    display:'flex',
    justifyContent:'center',
    '.wrapper':{
        width:1050,
        '.MuiBreadcrumbs-separator':{
            padding:'15px 25px '
        },
        '.MuiLink-root':{
            color:'#828282',
            cursor: 'pointer '
        },

        '.header':{
            padding: 15,
            display:'flex',
            flexDirection:'column',
            '.MuiTypography-root':{
                display:'flex',
                textAlign:'center',
                justifyContent:'center',
            }
        },

    },
})