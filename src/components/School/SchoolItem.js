import * as React from 'react';
import {Box, Card, CardContent, CardMedia, Container, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {SCHOOL_ROUTE} from "../../utils/consts";
import {useContext, useEffect, useState} from "react";
import {fetchCourses, fetchOneOrganization, fetchOrganization, fetchOrganizations} from "../../http/courseAPI";
import {Context} from "../../index";

const SchoolItem = ({organization}) => {
    const navigate = useNavigate()

    return (
        <Container >
            <Box style={{display: "flex", gap: 3, flexDirection:"row", ml:0, pl:0}}>
                <Card
                    sx={{ maxWidth: 269, cursor:"pointer",}}
                     onClick={() => navigate(SCHOOL_ROUTE + '/' + organization.pk)}
                >
                    <CardMedia
                        component="img"
                        height="150"
                        image={organization.logo}
                    />
                    <CardContent>
                        <Typography >
                            {organization.name_ru}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>

    );
}
export default SchoolItem;