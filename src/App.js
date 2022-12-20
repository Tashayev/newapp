import React from "react";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "./components/global";
import NavBar from "./components/NavBar";


const App = () => {
  return (
        <BrowserRouter sx={{display:{sm:"block"}}}>
            <GlobalStyle />
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
  );
}

export default App;
