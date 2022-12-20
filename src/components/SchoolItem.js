import * as React from 'react';
import {Box, Card, CardActions, CardContent, CardMedia, Container, ImageList, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {SCHOOL_ROUTE} from "../utils/consts";
const SchoolItem = ({school}) => {

    const navigate = useNavigate()
    return (
        <Container>
            <Box style={{display: "flex", gap: 3, flexDirection:"row", ml:0, pl:0}}>
                <Card
                    sx={{ maxWidth: 269, cursor:"pointer",}}
                    onClick={() => navigate(SCHOOL_ROUTE + '/' + school.id)}

                >
                    <CardMedia
                        component="img"
                        height="150"
                        image={school.img}
                    />
                    <CardContent>
                        <Typography >
                            {school.name}
                        </Typography>
                    </CardContent>

                </Card>

            </Box>
        </Container>

    );
}
export default SchoolItem;