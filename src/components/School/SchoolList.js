import React, {useContext} from 'react';
import {Box, Container, Link, Typography} from "@mui/material";
import {Context} from "../../index";
import SchoolItem from "./SchoolItem";
import {SCHOOL_ROUTE} from "../../utils/consts"
import {useNavigate} from "react-router-dom";
const SchoolList = () => {
    const navigate = useNavigate()
    const {organizations} = useContext(Context)

    return(
        <Container sx={{mb:6}}>
            <Box sx={{display:'flex', justifyContent:"space-between",alignItems:"center", mt:10, marginBottom:10}}>
                <Typography sx={{fontSize:24, fontWeight:700, color:"#333", ml:3}}>
                    Школы
                </Typography>
                <Link onClick={()=>navigate(SCHOOL_ROUTE)} underline="none" style={{cursor:"pointer", display:"flex", justifyContent:"end", color:"#828282"}}>
                    Показать все
                </Link>
            </Box>
            <Box
                sx={{display: "flex", flexDirection:"row", mt:10}}
            >
                {organizations?.map((organization)=>
                    <SchoolItem  sx={{paddingRight:3, maxWidth:259}}  organization={organization} key={organization.pk}/>
                )}
            </Box>
        </Container>
    );
}
export default SchoolList;