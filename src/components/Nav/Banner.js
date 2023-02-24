import React from 'react';
import Divider from "@mui/material/Divider";
import iphone from "../assets/iphone.png";
import {Button,  Toolbar} from "@mui/material";

const Banner = () => {
    return (
        <Toolbar style={{display:"flex", justifyContent:"space-around",height:"70px",  background:"linear-gradient(180deg, #FF3B30 0%, #FF6683 100%)"}}>
            <div style={{fontWeight:"700"}}>{"РОЗЫГРЫШ"}<br/>{"ПРИЗОВ"}</div>
            <Divider style={{background:"white"}} orientation="vertical" variant="middle" flexItem />
            <div>{"6 шт. iPhone 8"}</div>
            <div>{"4 шт. iPhone XS"}</div>
            <div>{"2 шт. iPhone XS Max"}</div>
            <img src={iphone} alt="Logo"/>
            <div>{"с 12 по 21 ноября"}</div>
            <Button variant="text" style={{width:"200px", height:"45px", color:"#FF3B30", background:'white'}}>Участвовать</Button>
        </Toolbar>
    );
};

export default Banner;