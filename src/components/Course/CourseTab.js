import React from 'react';
import {
    Card,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@mui/material";


const CourseTab = ({courses}) => {
    return (
        <Container sx={{display:"grid"}}>
            <TableContainer component={Paper}>
                {courses.topics?.map((course, i) =>
                    <Table key={i} component="th" scope="row">
                        <TableHead>
                            <TableCell sx={{fontWeight:"bold"}}>
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
        </Container>
    );
};

export default CourseTab;