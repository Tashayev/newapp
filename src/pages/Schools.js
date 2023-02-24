import React, {useContext} from 'react';
import {Box, Container, Typography} from "@mui/material";
import SchoolItem from "../components/School/SchoolItem";
import {Context} from "../index";
const Schools = () => {
    const {organizations} = useContext(Context)
    return (
        <Container sx={{mt: 3}}>
            <Typography sx={{fontSize:24, fontWeight:700, color:"#333"}}>
                Школы
            </Typography>
            <Box sx={{display:"flex",  flexFlow:"row wrap",  gap:3, mt: 3, pl:0}}>
                {organizations?.map((organization)=>
                    <SchoolItem  sx={{paddingRight:3}}  organization={organization} key={organization?.pk}/>
                )}
            </Box>
        </Container>
    );
};

export default Schools;