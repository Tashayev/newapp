import React, {useContext} from 'react';
import {Box, Container, Typography} from "@mui/material";

import SchoolItem from "../components/School/SchoolItem";
import {Context} from "../index";


const Schools = () => {
    const {school} = useContext(Context)

    return (

            <Container sx={{mt: 3}}>
                <Typography sx={{fontSize:24, fontWeight:700, color:"#333"}}>
                    Школы
                </Typography>
                <Box sx={{display:"flex",  flexFlow:"row wrap",  gap:3, mt: 3, pl:0}}>
                    {school.schools.map((school, index)=>
                        <Box sx={{pl:0}}>
                            <SchoolItem key={index} school={school}/>
                        </Box>
                    )}
                </Box>
            </Container>

    );
};

export default Schools;