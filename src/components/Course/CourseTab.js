import React from 'react';
import {
    Card,
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";
const CourseTab = ({course}) => {
    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{display:"flex", maxWidth: {xs:450,sm:650,md:758}}}>
            <TableContainer component={Paper} sx={{}}>
                {course.topics?.map((course, i) =>
                    <Table key={i} component="th" scope="row">
                        <TableHead>
                            <TableCell sx={{fontWeight:"bold",}}>
                                {course.name}
                            </TableCell>
                        </TableHead>
                        <TableBody>
                            {course.lessons.map((a,i)=>
                                <TableRow >
                                    <TableCell sx={{display:"flex", flexDirection:"row", }}>
                                        <Card
                                            sx={{
                                                pt:1,
                                                textAlign:"center",
                                                height: 30,
                                                width: 70,
                                                backgroundColor: "#f2f2f2" ,
                                                borderRadius: 1,
                                                boxShadow:"none"
                                            }}
                                        >
                                            {i+1}
                                        </Card>
                                        <Typography sx={{pt:1, pl:3, fontWeight:"bold"}}>
                                            {a.name}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                )}
            </TableContainer>
        </Box>
    );
};

export default CourseTab;