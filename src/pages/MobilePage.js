import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CourseItem from "../components/Course/CourseItem";
import {useContext} from "react";
import {Context} from "../index";
import SchoolItem from "../components/School/SchoolItem";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const MobilePage = () => {
    const {courses}= useContext(Context)
    const {organizations}= useContext(Context)

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{display:{sm:'flex', md:'none'}, width: '100%', flexDirection:"column"}} >
            <Box sx={{mr: 5, ml: 5}}>
                <Box sx={{ml:2}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor='none'
                        textColor='#333'
                    >
                        <Tab label="Школы" {...a11yProps(0)}sx={{textTransform:"none"}}/>
                        <Tab label="Популярные курсы" {...a11yProps(1)} sx={{textTransform:"none"}}/>
                        <Tab label="Личностный рост" {...a11yProps(2)} sx={{textTransform:"none"}}/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {organizations?.map((organization)=>
                        <SchoolItem  sx={{paddingRight:3}}  organization={organization} key={organization.pk}/>
                    )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box sx={{ display: 'inherit', rowGap:5, flexDirection:"column",}}>
                        {courses?.map(course =><CourseItem course={course} key={course.pk} />)}
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box sx={{ display: 'inherit', rowGap:5, flexDirection:"column", }}>
                        {courses?.map(course =><CourseItem course={course} key={course.pk} />)}
                    </Box>
                </TabPanel>
            </Box>
        </Box>
    );
};

export default MobilePage;