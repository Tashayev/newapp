import React, {createContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import SchoolStore from "./store/SchoolStore";
import CoursePage from "./pages/CoursePage";
import axios from "axios";
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Context.Provider value={{
            user: new UserStore(),
            school: new SchoolStore(),

        }}>

        <App />
    </Context.Provider>,
);
