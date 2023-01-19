import React from 'react';
import {Box, Typography} from "@mui/material";
import ban from "../components/assets/banner-3.jpg"
import {styled} from "@mui/material/styles";

import SchoolList from "../components/School/SchoolList";
const Image = styled("div")({
    position: "relative",
    minWidth: '100vw',
    height: 400,
    backgroundImage: `url(${ban})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    color: '#fff',
});
const Main = () => {
    return (
        <Box>
            <Image >
                <div>
                    <Typography style={{fontSize:48, fontWeight:700, textAlign:'center'}}>
                        От прохождения курсов
                        <br/> до получения ученых степеней
                    </Typography>
                    <br/>
                    <Typography style={{fontSize:36, fontWeight:400, textAlign:'center'}}>
                        100% онлайн-обучение <br/>
                        от лучших университетов и компаний мира
                    </Typography>
                </div>
            </Image>
            <SchoolList />
        </Box>
    );
};
export default Main;