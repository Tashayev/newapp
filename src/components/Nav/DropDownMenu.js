import * as React from 'react';
import {styled} from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Divider from "@mui/material/Divider";
import {Box, ListItemText, Typography} from "@mui/material";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {CATEGORY_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
export default function DropDownMenu() {
    const {categories} = useContext(Context)
    const [subMenu, setSubMenu] = useState([]);
    const navigate = useNavigate();
    return (
        <CategoryPicker>
            <Typography>
                КАТЕГОРИИ
            </Typography>
            <KeyboardArrowDownIcon/>
            <SubMenu >
                <Box className="sub-menu">
                    <Box className="sub-menu-wrapper">
                        <Box className="panel left-panel">
                            {categories?.map((category, i) =>
                                <Box key={i}>
                                    {category?.course_cnt > 0 ?
                                        <div className='left-item'
                                            onMouseEnter={() =>setSubMenu( category)}
                                             onClick={()=>navigate(CATEGORY_ROUTE+'/'+subMenu.id)}
                                        >
                                            <Typography >{category.code}</Typography>
                                            <Typography><ArrowForwardIosIcon /></Typography>
                                        </div>
                                        :null
                                    }
                                </Box>
                            )}
                        </Box>
                        <Divider  orientation="vertical" flexItem  className='divider'/>
                        <Box className="panel right-panel">
                            {subMenu?.children?.map((c, i)=>
                                <Box key={i}>
                                    {c?.course_cnt > 0 ?
                                        <ListItemText
                                            onClick={()=>navigate(
                                                CATEGORY_ROUTE + '/' + subMenu.id + '/' + 'sub' + '/' + c?.locales[0]?.course_category
                                            )}
                                            key={c.id}
                                        >
                                             {c?.code}
                                        </ListItemText>
                                        :null
                                    }
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </SubMenu>
        </CategoryPicker>
    );
}
const CategoryPicker= styled('div')({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    height:50,
    paddingLeft:15,
    paddingRight:15,
    color:'#333',
    fontFamily: "GothamPro",
    "&:hover":{
        backgroundColor: '#e7e7e7',
        '.sub-menu':{
            maxHeight: 1000,
        }
    },
})
const SubMenu = styled('div')({
    '.sub-menu':{
        position: "absolute",
        background: '#fff',
        zIndex: 11,
        boxShadow: '0px 5px 2px rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        fontSize: 14,
        lineHeight: 0,
        color: '#333',
        top: '100%',
        left: 0,
        width: 500,
        maxHeight: 0,
        overflow: "hidden",
        transition: '.25s',
        display: "flex",
        '.sub-menu-wrapper':{
            width: '100%',
            height: '100%',
            display: "flex",

            '.divider':{
                height: 150,
                marginTop:20
            },
            '.panel':{
                flex: 1,
                padding: '0 30px',
                margin: '30px 0',
                display: "flex",
                flexDirection: 'column',

                '.left-item':{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    '&:hover' :{
                        color: '#2F80ED',
                        '&:active ':{
                            color: '#2F80ED'
                        },
                    },
                },
                '& > div:hover' :{
                    color: '#2F80ED',
                    '&:active ':{
                        color: '#2F80ED'
                    },
                },

            },

        },
    }
})
