import React from "react";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/Nav/NavBar";
import Basement from "./components/Basment";

import {Box} from "@mui/material";



const App = () => {
    // const {languages}= useContext(Context)
    // const initialState = {
    //     languages
    // };
    //
    // function reducer(state = initialState, action) {
    //     switch (action.type) {
    //         case 'SET_VARIABLE':
    //             return { ...state, variableName: action.payload };
    //         default:
    //             return state;
    //     }
    // }


  return (
        <BrowserRouter >

                <Box sx={{position: 'relative', minHeight: '100vh', pb:5}}>
                    <NavBar/>
                    <AppRouter/>
                </Box>
                <Box sx={{  bottom: 0, width: '100%', height: '50px',}}>
                    <Basement/>
                </Box>

        </BrowserRouter>
  );
}
export default App;
