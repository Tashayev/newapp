import * as React from 'react';
import {Box, Card, CardContent, CardMedia, Container, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {SCHOOL_ROUTE} from "../../utils/consts";


const SchoolItem = ({organization}) => {
    const navigate = useNavigate()

    return (
        <Container  >
            <Box sx={{display: "flex", gap: 3, flexDirection:"row", }}>
                <Card  sx={{width:{sm:650, md:259}, cursor:"pointer",}}

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