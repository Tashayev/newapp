import React, {useContext} from 'react';
import {Box, Card, ImageList,} from "@mui/material";
import {styled} from "@mui/material/styles";
import ban from "../components/assets/flag.png";
import {Context} from "../index";
import  {useParams} from "react-router-dom";

const Pic = styled("div")({
    position: "relative",
    minWidth: '100vw',
    height: 256,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) , url(${ban})`,
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

const SchoolPage = () => {
    const {school} = useContext(Context)
    const {id} = useParams()

    let img
    let name

    return (
        <Box >
            <Pic/>
            <div>
                {school.schools.
                filter(item => item.id === id)
                    .map((item, index) =>(
                    <div key={index} >
                        <h1>{item.name}</h1>
                        {/*<img*/}
                        {/*    className="product-image"*/}
                        {/*    src={item.img}*/}

                        {/*/>*/}
                    </div>
                ))}
            </div>
        </Box>
    );
};
export default SchoolPage;