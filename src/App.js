import React from "react";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "./components/global";
import NavBar from "./components/Nav/NavBar";
import Basement from "./components/Basment";


const App = () => {

  return (
        <BrowserRouter sx={{display:{sm:"block"}}}>
            <GlobalStyle />
            <NavBar/>
            <AppRouter/>
            <Basement/>
        </BrowserRouter>
  );
}

export default App;
