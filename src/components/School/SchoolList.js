import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Box, Card, Container, Link, Typography} from "@mui/material";
import {Context} from "../../index";
import SchoolItem from "./SchoolItem";
import {SCHOOL_ROUTE} from "../../utils/consts"
import {useNavigate} from "react-router-dom";
const SchoolList = observer(() => {
    const {school} = useContext(Context)
    const navigate = useNavigate()
    console.log(school)
    return (
        <Container >
            <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", marginTop:50, marginBottom:10}}>
                <Typography sx={{fontSize:24, fontWeight:700, color:"#333"}}>
                    Школы
                </Typography>
                <Link onClick={()=>navigate(SCHOOL_ROUTE)} underline="none" style={{cursor:"pointer", display:"flex", justifyContent:"end", color:"#828282"}}>
                    Показать все
                </Link>
            </div>

            <Box
                sx={{display: "flex", flexDirection:"row"}}
            >
                {school.schools.slice(0, 4).map((school, index)=>
                    <SchoolItem  sx={{paddingRight:3}} key={index} school={school}/>
                )}
            </Box>

        </Container>


    );
})
export default SchoolList;